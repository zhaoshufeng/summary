// let obj={}
// console.log(obj.constructor);

// Object.prototype.hello='world'
// let obj=new Object()
// console.log(obj);

// function Person (name,age){
//     this.name=name
//     this.age=age
//     this.introduce=function(){
//         console.log(`姓名：${this.name}；年龄：${this.age}`)
//     }
// }

// let zhangsan=new Person('张三','18')
// console.log(zhangsan.constructor)


// function Person (name,age){
//     this.name=name
//     this.age=age
// }

// let zhangsan=new Person('张三','18')
// zhangsan.introduce=function(){
//     console.log(`姓名：${this.name}；年龄：${this.age}`)
// }
// zhangsan.introduce()

// let lisi=new Person('李四','20')
// lisi.introduce() //introduce is not a function




// function Person (name,age){
//     this.name=name
//     this.age=age
// }

// Person.prototype.introduce=function(){
//     console.log(`姓名：${this.name}；年龄：${this.age}`)
// }

// let zhangsan=new Person('张三','18')
// zhangsan.introduce()

// let lisi=new Person('李四','20')
// lisi.introduce() 


function Person (name,age){
    this.name=name
    this.age=age
}
console.log(Person.prototype)
