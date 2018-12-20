function Mouse(name){
	this.name = name;
	this.isDead = false;
}
Mouse.prototype.sleep = function() {
	console.log("Sleep");
}
Mouse.prototype.die = function() {
	this.isDead = true;
};
module.exports = Mouse;