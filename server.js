const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
//
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
//
const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/youtube/download", (req, res) => {
  var URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});

// Download for mp3
app.get("/youtube/download/audio", (req, res) => {
  res.header("Content-Disposition", 'attachment; filename="audio.mp3"');

  let id = "bBv2wl6Qu8Y";

  let stream = ytdl(id, {
    quality: "highestaudio",
  });

  ffmpeg(stream)
    .audioBitrate(128)
    .format("mp3")
    .pipe(res, { end: true })
    .on("end", () => {
      console.log(`done, thanks`);
    });
});
//
//
//

app.get("/youtube/getdetails", async (req, res, next) => {
  var URL = req.query.URL;
  let videoIn = null;

  try {
    videoIn = await ytdl.getInfo(URL);
    res.send(videoIn.videoDetails);
  } catch (e) {
    console.log("<<<<<<<<<<< Error >>>>>>>>>>");
    res.send("Error occured while fetching video data");
  }
});
//
// Importing routes for other files
require("./reddit")(app);
