class MathFunctions {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return "4 + 4" + this.add;
    }

    subtract() {
        return "4 - 3" + this.subtract;
    }

    multiply() {
        return "6 x 7" + this.multiply;
    }

    divide() {
        return "8 / 4" + this.divide;
    }
}

let something = new ClassThing("argument");
console.log(something.add());

let hello = new Greetings("Kyle");
class Greetings {
    constructor(name) {
        this.name = name;
    }
    english() {
        return "Hello" + this.name;
    }

    spanish() {
        return "Hola" + this.name;
    }

    french() {
        return "Bonjour" + this.name;
    }

    arabic() {
        return "Ahlaan" + this.name;
    }
}

console.log(hello.english());