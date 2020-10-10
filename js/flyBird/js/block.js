function Block() {
    this.upDivWrap = null;
    this.downDivwrap = null;
    this.downHeight = baseObj.randomNum(0, 150);
    this.gapHeight = baseObj.randomNum(150, 160);
    this.upHeight = 312 - this.downHeight - this.gapHeight;
    //生成管道
}