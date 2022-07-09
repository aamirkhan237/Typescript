interface userType{
    name:string,
    age:number,
    getName:()=>string

}
var user:userType={
    name:'brijesh',
    age:32,
    getName:function(){
        return "old boy"
    }

}
console.warn(user.getName())