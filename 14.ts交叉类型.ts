/**
 * 交叉类型：功能类似于借口继承，用于组合多个类型为一个类型
 * 关键字： &
 */
interface Person {
    name: string
}
interface Phone {
    phoneNumber: number
}
//使用交叉后，新类型就具有两个借口的所有属性类型
type AdressBook = Person & Phone;

let adb_01: AdressBook = {
    name: "zhangsan",
    phoneNumber: 1234567890
}