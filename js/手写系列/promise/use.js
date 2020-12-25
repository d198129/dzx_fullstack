function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('aaa');
    },1000)
  })
}
function b() {
  setTimeout(() => {
    console.log('bbb');
  })
}