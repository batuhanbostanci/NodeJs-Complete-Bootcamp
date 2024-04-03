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

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);
    //console.log(res.body.message);

    await writeFileWithPromises('dog-img.txt', imgs.join('\n'));
    console.log('image was saved successfully');
  } catch (err) {
    console.log(err);
    throw err;
  }

  return '2: Ready';
};

//This will print the promises, to see run that part of the code
// console.log('1: will get dog pics');
// const x = getDogPic();
// console.log(x);
// console.log('2:Done getting dog pics!');

//it returns promises, that is why we use then to get actual value of it.
// console.log('1: will get dog pics');
// getDogPic().then((x) => {
//   console.log(x);
//   console.log('2:Done getting dog pics!');
// });

//if there is a error log below.
// console.log('1: will get dog pics');
// getDogPic()
//   .then((x) => {
//     console.log(x);
//     console.log('2:Done getting dog pics!');
//   })
//   .catch((err) => {
//     console.log('Error');
//   });

//Making upper logic with async await way!

(async () => {
  try {
    console.log('1: will get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('2:Done getting dog pics!');
  } catch (err) {
    console.log('error');
  }
})();

//
