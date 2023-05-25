//指定参数类型和函数返回值类型
function add (num01:number,num02:number):number{
    return num01+num02;
}
function noRetuenfunc ():void{
    console.log("this function no return!")
}
//可选参数,可选参数只能在必传参数之后
function addNumbers (num01:number,num02:number,num03?:number):number{
    if(num03){
        return num01+num02+num03;
    }else{
        return num01+num02;
    }
    
}