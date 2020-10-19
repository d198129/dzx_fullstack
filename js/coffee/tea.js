// 1. 把水煮开
// 2. 把沸水浸泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬
var Tea = function(type) {
    this.type = type;

}
Tea.prototype.boilWater = function() {
    console.log('把水煮开');
}
Tea.prototype.water1 = function() {
    console.log('把沸水浸泡茶叶');
}
Tea.prototype.water2 = function() {
    console.log('把茶水倒进杯子');
}
Tea.prototype.water3 = function() {
    console.log('加柠檬');
}
Tea.prototype.init = function() {
    console.log(this.type);
    this.boilWater();
    this.water1();
    this.water2();
    this.water3();
}
var tea = new Tea('柠檬茶');
tea.init();