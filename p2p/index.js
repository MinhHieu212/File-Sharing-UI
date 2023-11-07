const express = require("express");
const cors = require("cors");
const app = express();
const uploadRepo = require("./config/upload");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
var upload = multer();
app.use(cors("*"));

app.use(upload.array());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

const createNode = require("./src/index");
const node = createNode();
node.listen(3000, 3001, () => {
  console.log("File server is running on port 3000 and file server is 3001");
});
app.post("/fetch", (req, res) => {
  const clientIP = req.body.clientIp;
  console.log(clientIP);
  const clientPort = req.body.clientPort;
  const fileName = req.body.fileName;
  node.connect(clientIP, Number(clientPort), () => {
    console.log(`Connection to ${clientIP} established.`);
  });
  setTimeout(() => {
    // chưa giải quyết vấn đề async được nên ta dùng tạm thằng setTimeout
    node.fetchFile({ fileName });
    res.status(200).send("File Received !!");
  }, 1000);
});
// sau khi upload thì gọi API lên serverBE để update db

app.post("/uploadRepo", uploadRepo.single("file"), (req, res) => {
  res.send("Upload to Repo Success fully");
});

app.delete("/fileInRepo", (req, res) => {
  const { fileName } = req.body;
  // Check if fileName is provided in the request
  if (!fileName) {
    return res
      .status(400)
      .json({ error: "File name is required in the request body" });
  }

  // Construct the path to the file

  const filePath = path.join(__dirname, "./repo", fileName); // Replace this with the actual path to your repository folder

  // Use fs.unlink() to delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).send("File deleted successfully");
  });
});
app.get("/hostRepo", (req, res) => {
  const folderPath = path.join(__dirname, "../p2p/repo");
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    // `files` is an array containing the names of all files in the directory
    return res.status(200).json({ files });
  });
});
// dùng để publdish lname fanme : quằng file từ disk vào repo
app.post("/publishDiskToRepo", (req, res) => {
  const lname = req.body.lname;
  const fname = req.body.fname;
  const sourceFilePath = path.join(__dirname, "disk", lname);
  const destinationFilePath = path.join(__dirname, "repo", fname);
  fs.rename(sourceFilePath, destinationFilePath, (err) => {
    if (err) {
      console.error("Error moving the file:", err);
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ message: "File moved and renamed successfully." });
    }
  });
});
app.listen("8080", () => {
  console.log("P2P server for API is running on 8080");
});
