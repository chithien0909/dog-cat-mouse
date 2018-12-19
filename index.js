var Cat = require('./Cat');
var Mouse  = require('./Mouse');
var Dog = require('./Dog');
var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();
cat.eat(mouse);
try{
	cat.eat(dog);

}catch(error){
	console.log('While cat is eating a dog');
}
console.log(cat);