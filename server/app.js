const fs = require("fs");
const sharp = require("sharp");

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     fs.readFile("", () => {
//       sharp(1, () => {
//         resolve();
//       });
//     });
//   });
// }

// fs.readFile(req.files.file.tempFilePath, (e, b) => {
//   sharp(b)
//     .resize(100)
//     .toBuffer()
//     .then(data => {
//       console.log("finish");
//       fs.writeFileSync(
//         "./thumbnail" +
//           req.files.file.tempFilePath.replace(
//             path.resolve(__dirname, "./tmp/"),
//             ""
//           ),
//         data
//       );
//     });
// });

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./tmp/tmp-1-1569807448629", (e, b) => {
      sharp(b)
        .resize(100)
        .toBuffer()
        .then(data => {
          fs.writeFile("./thumbnail/aaa.jpg", data, e => {
            if (e === undefined) {
              resolve(data);
            } else {
              reject(e);
            }
          });
        });
      resolve("success");
    });
  });
}
readFile()
  .then(function(a) {
    console.log(a === "success");
  })
  .catch(e => console.log(e));

// timeout(1000).then(value => {
//   console.log(value);
// });

// new Promise(function(resolve, reject) {
//   if (fs.readFile(req.files.file.tempFilePath)) {
//     resolve(b);
//   } else {
//     reject();
//   }

//   Promise.then(
//     function(b) {
//       sharp(b)
//         .resize(100)
//         .toBuffer();
//     },
//     function(err) {
//       console.log(err);
//     }
//   );
// });

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(req.files.file.tempFilePath, (e, b) => {
      sharp(b)
        .resize(100)
        .toBuffer()
        .then(data => {
          console.log("finish");
          fs.writeFile(
            "./thumbnail" +
              req.files.file.tempFilePath.replace(
                path.resolve(_dirname, "./tmp/"),
                ""
              ),
            data,
            e => {
              if (e === undefined) {
                resolve(data);
              } else {
                reject(e);
              }
            }
          );
        })
        .catch(e => console.log("e", e));
    });
  });
}

readFile()
  .then(function() {
    res.send(
      req.files.file.tempFilePath.replace(path.resolve(__dirname, "./tmp/"), "")
    );
    console.log("send");
  })
  .catch(e => console.log(e));
