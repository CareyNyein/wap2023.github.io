const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const imagePath = './resource/imgs/dog.jpg';
    const imageStream = fs.createReadStream(imagePath);

    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Content-Disposition', 'attachment; filename=dog-download.jpg');

    imageStream.pipe(res);
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});