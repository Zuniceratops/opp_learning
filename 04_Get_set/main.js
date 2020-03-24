class User {
    constructor(){

    }
    #test = 'Hohoho'
    set name(name) {
        console.log( 'Privat = ' + this.#test )
        this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name;
    }
    one() {
        console.log(this.#test)
    }
}

const student = new User();
student.name = '    ALex  '
console.log(student)
console.log(student.name)
// console.log(student['#test'])

class User2 extends User {

}
const student2 = new User2();
student2.one();
student2.name = 'oleg'
