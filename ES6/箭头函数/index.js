// let foo = {
//     value: 1,
//     getValue: () => { //箭头函数没有this
//         console.log(foo.value)
//     }
// }
// foo.getValue();

// function Foo() {
//     this.value = 1;
// }
// Foo.prototype.getValue = () => {
//     console.log(this.value);
// }
// let foo = new Foo();

{
    /* <body>
        <button id="btn">click</button>
        <script>
            const button = document.getElementById('btn')
            button.addEventListener('click', () => {
                this.innerHTML = 'hello'
            })
        </script>
    </body> */
}