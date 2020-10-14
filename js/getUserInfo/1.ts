//es6 箭头函数
const getUserInfos1 = (user: { name: string, sex: string, company: string }): string => {
    return `${user.name}性别${user.sex}就职于${user.company}`;
}
console.log(getUserInfos({ name: '任康华', sex: '男', company: '字节' }));
console.log(getUserInfos({ name: '刘志鹏', sex: '男', company: '抖音' }));

