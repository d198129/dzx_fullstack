var rotate = function(matrix) {
  let len = matrix.length;
  for(let i = 0;i < len;i++){
      for(let j = i;j < len;j++){
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
  return matrix.map(item => item.reverse())
};