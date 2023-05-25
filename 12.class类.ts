interface singSongs{
    songName:string
    sing():void
}
/**
 * 接口实现 implements
 */
class Person implements singSongs{
    name:string
    age:number
    sex:"male"|"female"
    songName: string
    sayHi():void{
        console.log(`Hi, my name is ${this.name}, I\`m ${this.age} years old`)
    }
    sing(): void {
       console.log(`I can sing <<${this.songName}>> !`) 
    }
    //构造函数，为实例初始化赋值
    constructor (name:string,age:number,sex:"male"|"female",song:string){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.songName = song;
    }
}

let p_01 =new Person("zhangsan",18,"female","Yesterday Once More");
p_01.sayHi();
/**
 * 类继承 extends
 */
class Teacher extends Person{
    subject:string
    constructor(name:string,age:number,sex:"male"|"female",song:string,subject:string){
        super(name,age,sex,song);
        this.subject = subject;
    }
    teach():void{
        console.log(`I teach ${this.subject}`)
    }
}

let teacher_01 = new Teacher("wangwu",30,"male","You Are My Sunshine","English");
teacher_01.sayHi();
teacher_01.teach();
teacher_01.sing();


