class User {
    constructor(name) {
        this.name = name;
    }
    sayHello(){
        console.log(this.name + 'Hello')
    }
}

const newUser = new User('Alex');
console.log( newUser)

class Person extends User {
    constructor(name,email) {
        super(name);
        this.name = name;
        this.email = email;
    }
}

const il = new Person( 'il', 'hjk@mail.com')
console.log(il)

class User {
    sayHello() {
        console.log(this.name + 'Hello')
        return this.name;
    }
}

const alex = new User();
console.log(alex.sayHello())

class Person extends User {
   constructor(name){
       super();
       this.name = name;
   }
}

const li= new Person('lu');
console.log(li)