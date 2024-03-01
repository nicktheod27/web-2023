import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

const server = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.static(path.join(__dirname,'users')));

server.get('/', function(req, res)  {
  res.sendFile(__dirname + "/users/login.html");
});

server.listen(port, function ()  {
  console.log(`Server is running on port ${port}`);
});
