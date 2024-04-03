const fs = require('fs');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);

//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);

//         console.log('image was saved successfully');
//       });
//     });
// });

//Starting promises part

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);

//         console.log('image was saved successfully');
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });

const readFilePromises = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('i could not find that file');
      resolve(data);
    });
  });
};

const writeFileWithPromises = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write file');

      resolve('success');
    });
  });
};

/*
readFilePromises(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    //there are 2 then, and they are promises so, we can convert them as as promise
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFileWithPromises('dog-img.txt', res.body.message);

    // fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //   if (err) return console.log(err.message);

    //   console.log('image was saved successfully');
    // });
  })
  .then(() => {
    console.log('random dog image saved to file');
  })
  .catch((err) => {
    console.log(err.message);
  });
 */

// consuming promises with async/await

const getDogPic = async () => {
  try {
    const data = await readFilePromises(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFileWithPromises('dog-img.txt', res.body.message);
    console.log('image was saved successfully');
  } catch (err) {
    console.log(err);
  }
};

getDogPic();
