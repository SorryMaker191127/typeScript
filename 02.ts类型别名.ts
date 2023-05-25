//联合类型
let a:(number|string)[] = [1,"2",3,"4"];
//给该联合类型 使用类型别名
type NumStrArray = (number|string)[];
//使用类型别名
let a_01 :NumStrArray = [2,"3",4,"5",6];
let a_02 :NumStrArray = ["3",4,"5",6,"7"];