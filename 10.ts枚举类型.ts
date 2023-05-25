/**
 * 枚举 类似于字面量类型+联合类型组合的功能，也可以表示一组明确的可选值
 * 关键字 enum
 * 枚举的成员默认值为 从0开始的自增的数值
 * 可以给枚举中的成员初始化值
 * 初始化值可以是字符串，但是字符串没有自增，所以需要全部初始化值
 */
enum Direction { Up, Down=10, Left, Right=20 };
function changeDirection(dir: Direction) {
    console.log(dir)
}
changeDirection(Direction.Up);