function createIndexFinder(dir) {
  return function (arr, predicate, context) {
    let len = arr.length;
    let index = dir > 0 ? 0 : len - 1;
    for (; index >= 0 && index < length; index += dir){
      if (predicate.call(context,array[index], index, array)) return i;
    }
    return -1;
  }
}