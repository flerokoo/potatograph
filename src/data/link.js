var PayloadContainer = require("./payload-container");

function Link(node0, node1, length) {
    PayloadContainer.call(this);
    this.node0 = node0;
    this.node1 = node1;
    this.nodeset = null;
    this.length = length || 100;
}

Link.prototype = Object.create(PayloadContainer.prototype);

Link.prototype.getOther = function (node) {
    return node.id === this.node0.id ? this.node1 : this.node0;
}

Link.prototype.dispose = function () {
    this.node0.removeLink(this);
    this.node1.removeLink(this);
    this.node0 = this.node1 = null;
}

module.exports = Link;