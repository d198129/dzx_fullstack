var convert = function(s, numRows) {
  if(numRows == 1)  return s;
  const len = s.length;
  const size = 2 * numRows -2;
  let result = '';
  for(let i = 0;i <numRows;i++){
      for(let j = 0;j <= parseInt(len / size);j++){
          let l1 = j * size + i;
          let l2 = (j+1) * size -i;
          if(l1 < len) result += s[l1];
          if(i==0 || i == (numRows - 1)) continue;
          if(l2 < len && l1 != l2) result += s[l2];
      }
  }
  return result;
};