var isValid = function(s) {
    var i, len = s.length,
        c, match;
    var stack = new Stack();
    for (i = 0; i < len; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            if (stack.length() == 0)
                return false;
            c = stack.peek();
            console.log(c);
            stack.pop();
            if (s[i] == ')') {
                match = '(';
                console.log(match);
            }
            if (s[i] == '}') {
                match = '{';
            }
            if (s[i] == ']') {
                match = '[';
            }
            if (c != match) {
                return false;
            }
        }
    }
    if (stack.length() != 0) {
        return false;
    }
    return true;
};

function Stack() {
    this.dataStore = [];
    this.top = 0; //栈顶元素的位置
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) { //进栈
    this.dataStore[this.top++] = element;
}

function pop() { //出栈
    return this.dataStore[--this.top];
}

function peek() { //栈顶元素
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}
console.log(isValid(['(', ')']));