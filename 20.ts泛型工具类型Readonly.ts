/**
 * Partial 用来构造一个类型，将Type的所有属性设置为只读
 */
 interface Props {
    id: string
    arr: number[]
}

type ReadonlyProps =  Readonly<Props>
//接口属性都变为可选
let RP_01: ReadonlyProps = {
    id: "123",
    arr:[1,2,3,4]
}
//错误，接口属性变为了只读，不可以修改
//RP_01.id ="234"