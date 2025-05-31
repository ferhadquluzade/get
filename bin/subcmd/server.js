import http from "http";
import fs from "fs";
import path from "path";

const port = 3000;
const expectedUsername = "user";
const expectedPasscode = "pass";

export const server = (filePath) => {
  const srv = http.createServer((req, res) => {
    const auth = req.headers["authorization"];

    if (!auth || !auth.startsWith("Basic ")) {
      res.writeHead(401, {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
        "Content-Type": "text/plain",
      });
      res.end("Authentication required");
      return;
    }

    // Decode Base64 credentials
    const base64Credentials = auth.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString();
    const [username, passcode] = credentials.split(":");

    if (username !== expectedUsername || passcode !== expectedPasscode) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("Forbidden: Invalid credentials");
      return;
    }

    // Auth success
    if (filePath) {
      try {
        const absolutePath = path.resolve(filePath);
        const fileContent = fs.readFileSync(absolutePath);
        const contentType = getContentType(absolutePath);

        res.writeHead(200, { "Content-Type": contentType });
        res.end(fileContent);
      } catch (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Access granted. Hello, world!\n");
    }
  });

  srv.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`Username: ${expectedUsername}, Passcode: ${expectedPasscode}`);
    if (filePath) {
      console.log(`Serving file: ${path.resolve(filePath)}`);
    }
  });
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    default:
      return "text/plain";
  }
}
