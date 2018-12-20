function Mouse(name){
	this.name = name;
	this.isDead = false;
}
Mouse.prototype.run = function(name){
	console.log("Run");
};
Mouse.prototype.die = function() {
	this.isDead = true;
};
module.exports = Mouse;