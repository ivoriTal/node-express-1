const fs = require('fs');
const axios = require('axios');
const { URL } = require('url');

const filename = process.argv[2];

fs.readFile(filename, 'utf8', async (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const urls = data.split('\n').filter(Boolean); // Split by line and filter out empty lines

  for (const url of urls) {
    try {
      const response = await axios.get(url);
      const hostname = new URL(url).hostname; // Extract hostname
      fs.writeFileSync(`${hostname}.txt`, response.data); // Save HTML to file
      console.log(`Wrote to ${hostname}`); // Log success message
    } catch (error) {
      console.error(`Couldn't download ${url}`); // Log error message
    }
  }
});
