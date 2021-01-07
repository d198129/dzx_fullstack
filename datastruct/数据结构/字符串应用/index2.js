// 设计一个支持以下两种操作的数据结构

// void addWorld(word);
// bool search(world); . a - z

const WorldDictionnary = function () {
  this.word = {};// map 角色
}

WorldDictionnary.prototype.addWorld = function (word) {
  // word相同长度的数组已经存在，只添加
  if (this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [world];
  }
}

WorldDictionnary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false;
  }
  const len = word.length;
  if (!word.includes('.')) {
    return this.words[len].includes(word);
  }
  const reg = new RegExp(word);
  return this.word[len].some(item => reg.test(item))
}

let test = new WorldDictionnary();
test.addWorld('hello')
console.log(test.search('hello'));