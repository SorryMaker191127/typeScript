/**
 * 相同点：都可以实现对象类型的组合
 * 不同点：对于同名属性之间，处理类型冲突的方式不同
 */
interface A {
    fn: (value: string) => string
}
//错误！同名属性会不兼容
// interface B extends A{
//     fn: (value:number) =>string
// }

interface B {
    fn: (value: number) => string
}
//交叉类型不会报错，相当于 fn :(value:string|number)=>string
type C = A & B;

let c: C;
c.fn(123)
c.fn("123")




