const express = require('express')
const path = require('path');
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
})

app.get('/download', (req, res) => {
    var idVideo = req.query.ID;
    const urlVideo = `https://www.youtube.com/watch?v=${idVideo}`
    res.header('Content-Disposition', 'attachment; filename="video.mp4"')

    ytdl(urlVideo, {
        format: 'mp4'
    }).pipe(res)
})

app.listen(5000, () => console.log('Server Running'))