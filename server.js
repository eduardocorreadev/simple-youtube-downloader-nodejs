const express = require('express')
const path = require('path');
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()

const log = require('./logger')

// app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
})

app.get('/download', (req, res) => {
    var {ID, QUALITY} = req.query;
    const urlVideo = `https://www.youtube.com/watch?v=${ID}`
    
    res.header('Content-Disposition', 'attachment; filename="untitled.mp4"')

    log(`${JSON.stringify(urlVideo)} \n`)
    console.log(QUALITY)

    ytdl(urlVideo, {
        format: 'mp4'
    }).pipe(res)
})

app.listen(5000, () => console.log('Server Running'))