let str1 = "Hello ts";
//常量str2 的类型就是 "Hello ts"
const str2 = "Hello ts";

//字面量类型一般配合联合类型一起使用，表示一组明确的可选值
function changeDirection(direction:'Up'|'Down'|'Left'|'Right'){
    console.log(direction)
}