const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); // Content-Type'ı text/html olarak değiştirdik

  // Güzel bir HTML sayfası ekledik
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Merhaba Orhan</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Merhaba Orhan!</h1>
    </body>
    </html>
  `;

  res.end(html);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
