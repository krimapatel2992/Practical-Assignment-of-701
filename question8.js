// const fetch = require('node-fetch');

const nodefetch=import('node-fetch');


async function fetchGooglePage() {
  const url = 'https://www.google.com';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Call the function to fetch the data
fetchGooglePage();
