// export { }
class Parent {
    name;
    setName(name) {
        this.name = name
    }
}

class child extends Parent {
    // name="Aamirkhan Pathan";
    getName() {
        return this.name
    }
}

let c1 = new child();

c1.setName("Aamir")
console.log(c1.getName())