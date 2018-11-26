var PayloadContainer = require("./payload-container");

function Link(node0, node1, length) {
    PayloadContainer.call(this);
    this.node0 = node0;
    this.node1 = node1;
    this.nodeset = null;
    this.length = length || 100;
}

Link.prototype = Object.create(PayloadContainer.prototype);

/**
 * Returns something
 * @param  {} node node0
 */
Link.prototype.getOther = function (node) {
    return node.id === this.node0.id ? this.node1 : this.node0;
}

Link.prototype.unlink = function () {    
    if (this.nodeset) {
        this.nodeset.removeLink(this);        
    }
}

Link.prototype.reverse = function () {
    var temp = this.node0;
    this.node0 = this.node1;
    this.node1 = temp;
    return this;
}

Link.prototype.setDirected = function () {
    this.addPayload("directed", true);
    return this;
}


module.exports = Link;