/**
 * 在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用。
 * 1.语法：在函数名称后面添加<>,<>中添加类型变量
 * 2.类型变量是一种特殊类型的变量，它处理的是类型，而不是值
 */
//例如：函数返回值类型根据传入参数类型确定，就不能擅自将参数类型定义为number或any
function returnInput<Type>(value: Type): Type {
    return value;
};
//调用泛型函数
let num: number;
num = returnInput<number>(10);
console.log(num);

let str: string;
str = returnInput("10");
console.log(str);
