const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');

// Arguments
const videoPath = process.argv[2]; // First argument: video file path
const segmentDuration = process.argv[3] || 120; // Second argument: duration (default to 120 seconds if not provided)
const mute = process.argv[4] === 'true'; // Third argument: mute (optional, defaults to false)

const videoName = path.basename(videoPath, path.extname(videoPath));
const outputFolder = 'output';
const outputDir = path.resolve(outputFolder, videoName);

// Check if the video has been split before
if (fs.existsSync(outputDir)) {
  console.log(`Video has already been split. Output directory exists: ${outputDir}`);
  process.exit();
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let ffmpegCommand = `${ffmpegPath} -i "${videoPath}" -c:v libx264 -crf 23 -preset veryfast -c:a aac -b:a 128k -map 0 -segment_time ${segmentDuration} -reset_timestamps 1 -f segment "${outputDir}/${videoName}_%03d${path.extname(videoPath)}"`;

if (mute) {
  ffmpegCommand = ffmpegCommand.replace('-c:a aac -b:a 128k', '-an');
}

exec(ffmpegCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`Video split into segments successfully in the "${outputDir}" directory.`);
});
