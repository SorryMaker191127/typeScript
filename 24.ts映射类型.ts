/**
 * 基于旧类创建新类
 */

//使用联合类型创建新的对象
type Propkeys = "x" | "y" | "z";
type Type1 = {
    x: number
    y: number
    z: number
}
//使用映射类型来简化 类似于for in
//注意 映射类型智能在类型别名中使用，不能在借口中使用
type Type2 = { [key in Propkeys]: number }

//使用对象类型创建新类
type PropObj = {
    a: number
    b: string
    c: number[]
}
type Type3 = { [Key in keyof PropObj]: number }