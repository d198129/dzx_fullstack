   //回文
   //上海自来水来自海上
   //true
   //false
   var isValid = function(str) {
       let i = 0,
           j = str.length - 1;
       while (i < j) {
           //是不是 数字？字母？
           //忽视
           if (!/[0-9a-zA-Z]/.test(str[i])) {
               i++;
               continue; //忽视以下的语句
           }
           if (!/[0-9a-zA-Z]/.test(str[j])) {
               j--;
               continue;
           }
           let left = str[i],
               right = str[j];
           if (left.toLowerCase() != right.toLowerCase()) {
               return false;
           }
           i++;
           j--;
       }
       return true;
   }
   console.log(isValid('A man, a plan, a canal: Panama'));