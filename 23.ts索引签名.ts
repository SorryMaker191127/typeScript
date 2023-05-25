/**
 * 当无法确定对象中具体有哪些属性或者对象中出现任意多个属性时，就要用到索引签名
 */
/**
 * key 只是占位，可以是任意合法变量名
 * key 被约束，只能是string类型
 * key 可以存在多个
 */
interface AnyObject {
    [key01: string]: number
}

let aObj: AnyObject = {
    a: 123,
    b: 456,
    "zhangsan": 789
}