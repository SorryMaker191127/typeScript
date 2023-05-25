/**
 * ts提供了typeof操作符，可以在类型上下文中引用变量或属性类型
 */
console.log(typeof "Hello ts");

let p = {x:1,y:2};
//point 根据上下文自动引用了 p的类型,不能查询函数返回值类型
function logPoint(point: typeof p){
    console.log(`point X:${point.x};point Y:${point.y};`);
}
logPoint({x:100,y:200})