const http = require('http');

const data = JSON.stringify({
  name: "Test User",
  email: "test@example.com",
  contactNumber: "1234567890",
  service: "Web Development",
  description: "This is a test description from the automated test script to verify SMTP."
});

const options = {
  hostname: 'localhost',
  port: 3005,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => { responseData += chunk; });
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Response: ${responseData}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
