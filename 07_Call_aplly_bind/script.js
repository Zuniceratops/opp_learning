const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');

function test(color, num) {
    this.style.background = color;
    console.log(num)
}
b1.addEventListener('click', test)

// Call()
// function.call(context, [arg1, arg2...])

test.call(b1) //сразу вызывает функцию
test.call(b2, 'green', 555) 

b2.addEventListener('click', test)


//apply  передается массивом 


test.apply(b2, ['green', 555]) 

b2.addEventListener('click', test)


// bind получает новый экцемпляр функции

let a = test.bind(b1, 'orange', 777);
let b = test.bind(b2, 'red', 888);

b2.onclick = b;
b2.onclick = a;