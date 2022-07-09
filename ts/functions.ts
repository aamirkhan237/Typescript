// export{}
function cals(a:number,b?:number):number{
    return b?a+b:a;
}
console.warn(cals(100,200))