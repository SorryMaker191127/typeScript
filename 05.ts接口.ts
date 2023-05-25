//接口
/*
接口和类型别名的区别
接口：只能为对象指定类型
类型别名：可以为任意类型指定别名
*/
interface IPerson{
    name:string
    age:number
    sayHi():void
}

let person_01:IPerson = {
    name:"zhangsan",
    age:18,
    sayHi() {
        console.log("Hi I`m zhangsan!")
    },
}
//接口的继承 将公共的属性或方法抽离出来，通过继承实现服用
interface Point2D{
    x:number
    y:number
}

interface Point3D extends Point2D{
    z:number
}

let point3D_01:Point3D = {
    x:100,
    y:100,
    z:100
}