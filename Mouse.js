function Mouse(name){
	this.name = name;
	this.die = false;

}

Mouse.prototype.die = function(){
	this.dead = true;
}
module.exports = Mouse;