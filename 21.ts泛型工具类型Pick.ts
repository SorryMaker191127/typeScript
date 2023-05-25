/**
 * Pick<Type,keys> 从Type中选择一组属性来构造新类型
 * 1.Pick 有两个类型变量 1）表示选择谁的属性 2）表示选择哪几个属性
 * 2.第二个变量如果只选择一个，只需要传入该属性名
 * 3.第二个类型变量只能传入第一个变量中存在的类型
 * 4.构造出来的新类型只有第二个参数选择的类型
 */
interface normalProps {
    id: number
    name: string
    children: string[]
}
type PickProps = Pick<normalProps, "name" | "children">
let PickP: PickProps = {
    name: "123",
    children: ["1", "2", "3"]
}