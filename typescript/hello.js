var hello = 'hello world';
console.log(hello);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log('hello world');
    };
    return Person;
}());
var zhangsan = new Person();
zhangsan.say();
