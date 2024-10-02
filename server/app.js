import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises"; // Correct the import

const server = express();
server.use(express.json());
server.use(cors());

const PORT = 5000;

server.get("/", (req, res) => {
  res.send(`Hello Express! I'm running @${PORT}`);
});

server.post("/shippingdetails", async (req, res) => {
  try {
    console.log(req.body);
    
    // Check if file exists, if not create it
    let fileData;
    try {
      // Attempt to read file
      fileData = await readFile("data.json", "utf-8");
      fileData = JSON.parse(fileData);
    } catch (error) {
      // If file not found or is empty, initialize it as an empty array
      if (error.code === "ENOENT") {
        fileData = [];
      } else {
        // Handle any other error (e.g. malformed JSON)
        throw new Error("Error reading or parsing data.json");
      }
    }

    // Push new data to array
    fileData.push(req.body);

    // Write the updated data back to file
    await writeFile("data.json", JSON.stringify(fileData, null, 2)); // Pretty print with indentation

    res.json({
      success: 'Success, Data is Sent. Please wait for email response',
    });
    
  } catch (error) {
    console.error("Error processing request:", error); // Log detailed error
    res.status(500).json({ error: "Internal Server Error, Try Again" });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running @${PORT} 🏃‍♂️`);
});