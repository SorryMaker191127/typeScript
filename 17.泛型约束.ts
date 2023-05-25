/**
 * 一般情况下，泛型可以是任意合法类型，但是在实际使用时，可能导致类型属性无法访问，所以需要添加泛型约束
 * 例如当函数参数是任意类型，当参数类型为number类型时，参数的length属性便无法访问
 */

//例如将泛型类型约束为数组类型
function returnLength<Type>(value: Type[]): number {
    return value.length;
}

let len = returnLength(["1", "2", "3", "4", "5"]);
console.log(len);

//添加约束
interface ILength {
    length: number
}
function consoleLength<Type extends ILength>(value: Type): void {
    console.log(value.length);
}
let myLength: ILength = {
    length: 100
}
consoleLength(myLength);
consoleLength("myLength");

//泛型类型之间相互约束
//例如：访问对象某个属性的值，访问的属性必须时该对象具有的属性
function consoleProp<Type, Key extends keyof Type>(obj: Type, objKey: Key) {
    console.log(obj[objKey]);
}
let people = { name: "zhangsan", age: 18 };
consoleProp(people, "name")