var obj = {
    name: '石穿',
    sex: '男',
    hometown: '湘潭'
}
var name;
for (name in obj) {
    if (typeof(obj[name]) !== 'function') {
        console.log(name + ':' + obj[name]);
    }
}