var PayloadContainer = require("./payload-container");

function Node(id) {
    PayloadContainer.call(this);
    this.id = id;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.savedState = {
        position: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 }
    }
    this.mass = 1;
    this.nodeset = null;
    this.links = [];
    this.fixed = false;
}

Node.prototype = Object.create(PayloadContainer.prototype);

Node.prototype.addLink = function (link) {
    this.links.push(link);
    return this;
}

Node.prototype.removeLink = function (link) {
    this.links.splice(this.links.indexOf(link), 1);
    return this;
}

Node.prototype.applyImpulse = function(x, y) {
    this.velocity.x += x / this.mass;
    this.velocity.y += y / this.mass;
    return this;
}

Node.prototype.step = function (dt) {
    if(this.fixed !== true) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
    }
}

Node.prototype.saveState = function () {
    this.savedState.position.x = this.position.x;
    this.savedState.position.y = this.position.y;
    this.savedState.velocity.x = this.velocity.x;
    this.savedState.velocity.y = this.velocity.y;
    return this;
}

Node.prototype.dispose = function () {
    
}

module.exports = Node;