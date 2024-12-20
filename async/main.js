const fs = require('node:fs');
const fsPromises = require('fs').promises;

// 1 Callbacks
fs.readFile('./file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile('./2.txt', data, (err) => {
    console.log('escribi 1!')
  })
});

// 2 promises
fs.promises.readFile("./file.txt")
  .then(data => {
    return fs.promises.appendFile("./2.txt", data)
  })
  .then(() => {
    console.log('escribi 2!')
  })
  .catch(function (error) {
    console.log(error);
  })

// 3 async/await
async function copyPasteFile () {
  try {
    const data = await fs.promises.readFile("./file.txt", 'utf-8')
    await fs.promises.appendFile("./2.txt", data)
    console.log('escribi 3!')
  } catch (error) {
    console.log('Hubo un error!')
  }
}
copyPasteFile()