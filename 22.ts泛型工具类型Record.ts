/**
 * Record<keys,Type> 直接构建一个类型，属性键为Keys，属性类型为Type
 */
type RecordType = Record<"name" | "adress" | "phone", string>

let RecordT: RecordType = {
    name: "zhangsan",
    adress: "shenzhen",
    phone: "1234567890"
}