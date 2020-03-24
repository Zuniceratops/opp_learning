// arrow function -> this -> window
console.log(this) //window
//this - текущий объект


let button = document.querySelector('.b-1')
function buttonHandler() {
    console.log(this);
    this.style.background = 'orange';
}
button.addEventListener('click', buttonHandler);


function f1() {
    this.style.background = 'orange';
}
let p = document.querySelectorAll('p')
 for(let i = 0; i < p.length; i++) {
     p[i].addEventListener('click',f1);
 }

 //

 class U2 {
     constructor(model) {
         this.model = model;
     }
     showThis() {
        console.log(this)
     }
 }

 const boat =new U2('456');
 console.log(boat)
 boat.showThis();

 class YellowSubmarine extends U2 {
     constructor(model, color) {
        super(model);
        this.color = color;
        console.log(this.model)
     }
 }

 let b = new YellowSubmarine(666, 'red');
 console.log(b);
 console.log(b.model);