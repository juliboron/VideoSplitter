# Video Splitting Tool Documentation

This document provides instructions for setting up and using the Video Splitting Tool. This Node.js script splits video files into segments of specified duration and optionally mutes the audio. It leverages `ffmpeg-static`, ensuring no global installation of FFmpeg is required.

## Prerequisites

- **Node.js**: Install from [https://nodejs.org/](https://nodejs.org/).
- **npm** (Node Package Manager): Comes with Node.js, used for managing dependencies.

## Installation

1. **Install `ffmpeg-static`**:

   `ffmpeg-static` provides a static FFmpeg binary for Node.js projects. Install it using npm:

   ```bash
   npm install ffmpeg-static

2. **Clone repo**:
    Clone the repository
    ```bash
    git clone https://github.com/juliboron/VideoSegmenter

3. **Move video files**
    Move your desired vieo files into the `/input` folder.

## Usage

    The Video Splitting Tool is designed to be run from the command line, accepting parameters for the video file path, segment duration, and an optional mute flag.
    ```bash
    node index.js <videoPath> <duration> [mute]

- **<videoPath>**: The path to the video file you want to split into segments. This parameter is required. Typically `input/<yourFile.mp4>`.
- **<duration>**: The duration of each segment in seconds. This parameter is required.
- **[mute]**: An optional boolean flag to mute the audio in the output segments. Use true to mute audio or false to keep the audio. If omitted, the default is false.

## Examples
- **Splitting a video into 2-minute segments**:
    ```bash
    node splitVideo.js path/to/your/video.mp4 120

- **Splitting a video into 2-minute segments and muting the audio**:
    node splitVideo.js path/to/your/video.mp4 120 true

## Script Output
    The script will create an output directory named after your video file in the predefined output folder (output). It will then generate the video segments in this directory, each with a duration specified by the <duration> parameter. If the output directory for the given video already exists, the script will not proceed to re-split the video, avoiding duplication of work.

## Notes
    - Before running the script, ensure that the path to the video file is correct and accessible from your script's location.
    - The duration parameter should be specified in seconds.
    - The mute flag is optional and should be omitted or set to false if you wish to retain the audio in the segments.

    This tool simplifies the process of splitting videos into manageable segments for various applications, such as content creation, analysis, or distribution. By leveraging ffmpeg-static, it offers a portable and easy-to-set-up solution for video processing tasks.
