const fs = require('fs').promises;

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`File '${filePath}' has been deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}

// Example usage:
const fileToDelete = './demo.txt'; // Replace this with the path of the file you want to delete

deleteFile(fileToDelete);
