interface valueInterface<Type> {
    value: Type
    valueArray: Type[]
    consoleValue: () => Type
}
//泛型接口没有类型推断，必须显示的指定类型
let valueObj: valueInterface<number> = {
    value: 123,
    valueArray: [1, 2, 3, 4, 5],
    consoleValue: () => {
        return 123
    }
}