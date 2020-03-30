// Imports the Google Cloud client library
// Import other required libraries
const fs =  require('fs');
const textToSpeech = require('@google-cloud/text-to-speech');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();


async function quickStart(text, fileName) {

  // The text to synthesize
//   const text = 'hello, world!';

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  //this makes writeFile  synchronous. computer waits for write file to fnish before moving on
  //write file takes 4 arguments, 3 of which we are using. -name of file, the data to write, and encoding format
  await writeFile(fileName, response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}
quickStart();

module.exports = textToSpeech;