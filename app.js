const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Node CI/CD App</title>

<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .container {
    text-align: center;
    max-width: 600px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
  }

  .card {
    background: rgba(255,255,255,0.1);
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 8px 0;
  }

  button {
    padding: 12px 25px;
    border: none;
    background: #ff9800;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
  }

  button:hover {
    background: #e68900;
    transform: scale(1.05);
  }

  .status {
    margin-top: 15px;
    font-weight: bold;
    color: #00ffcc;
  }

  .footer {
    margin-top: 20px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
</style>

</head>

<body>

<div class="container">
  <h1>🚀 CI/CD Node.js App</h1>
  <p>Deployed using Jenkins + Docker + AWS EC2</p>

  <div class="card">
    <h2>✅ Project Features</h2>
    <ul>
      <li>✔ Jenkins Pipeline</li>
      <li>✔ Docker Container</li>
      <li>✔ AWS EC2 Deployment</li>
      <li>✔ Automated CI/CD</li>
    </ul>
  </div>

  <button onclick="showMessage()">Check Status</button>
  <div class="status" id="status"></div>

  <div class="footer">
    Built by Aby Joykutty 💻
  </div>
</div>

<script>
function showMessage() {
  document.getElementById("status").innerText = "🔥 Deployment Successful!";
}
</script>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});
