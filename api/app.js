const express = require('express');
const http = require('http');
const fetch = require('node-fetch');
const HTMLParser = require('node-html-parser');
const PORT = 8090;
const app = express();
const server = http.Server(app);

app.get('/lyrics', (req, res) => {
    const songName = clearRequestParameterChars(req.query.song_name);
    let artistName = clearRequestParameterChars(req.query.artist_name);
    artistName = artistName.charAt(0).toUpperCase() + artistName.substr(1);
    fetch(`https://genius.com/${artistName}-${songName}-lyrics`)
        .then(res => res.text())
        .then(html => {
            const root = HTMLParser.parse(html);
            const lyrics = root.querySelector('.lyrics').text.replace(/\[.*\]/g,'')
            res.send(lyrics);
        })
        .catch(e => {
            res.status(500);
            res.send(e);
        });
});

function clearRequestParameterChars(requestParam) {
    return requestParam.toLowerCase().replace(/ /g, '-').replace(/,/g, '').replace(/'/g, '').replace(/[{()}]/g, '').split('.').join('');
}

server.listen(PORT);