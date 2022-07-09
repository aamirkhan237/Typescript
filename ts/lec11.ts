
class App{
    // name="Aamirkhan"
    name;
    constructor(name:string){
        this.name=name
    }
    getName():string
        {
        console.warn(this.name)
        return this.name
        }
    }
        let a1=new App("ALL MATTERS");
        a1.getName();