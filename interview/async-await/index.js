// async/await 的原理是什么？把下面这段代码翻译成promise；

function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(2)
    },2000)
  })
}

// async function testAsync() {
//   let a = await getJson()
//   console.log(3);
//   console.log(a); // 2,3,2
// }

async function testAsync() {
  let a = await getJson()
  console.log(3);
  console.log(a); // 2,3,2
}
// return Promise.resolve().then(() => {
//   return getJson();
// }).then((res) => {
//   let a = res;
//   console.log(3);
//   console.log(a)
// })

// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson();
//   }).then(() => {
//     console.log(3);
//   })
// }

testAsync();