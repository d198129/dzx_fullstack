var y;
(function(){
  var x = y = 1;// var x = 1; y = 1;
})();

console.log(y); // 1
console.log(x); // error