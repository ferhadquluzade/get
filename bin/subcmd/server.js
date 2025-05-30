import http from "http";

const port = 3000;
const expectedUsername = "user";
const expectedPasscode = "pass";

export const server = () => {
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
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Access granted. Hello, world!\n");
  });

  srv.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`Username: ${expectedUsername}, Passcode: ${expectedPasscode}`);
  });
};
