/**
 * Partial 用来构造一个类型，将Type的所有属性设置为可选
 */
interface Props {
    id: string
    arr: number[]
}

type PartialProps = Partial<Props>
//接口属性都变为可选
let PP_01: PartialProps = {
    id: "123"
}