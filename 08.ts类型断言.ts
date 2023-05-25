const aLink = document.getElementById("linka");
/*
aLink :HTMLElement 
该类型只包含公共属性和方法，不能包含a标签的href特有属性
因此需要使用类型断言指定更加具体的类型
*/
const bLink = document.getElementById("linkb") as HTMLAnchorElement ;
console.log(bLink.href)