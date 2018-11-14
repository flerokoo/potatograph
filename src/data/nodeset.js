var Node = require("./node");
var Link = require("./link");

function NodeSet() {
    this.nodes = [];
    this.nodeMap = {};
    this.links = [];
}
 
NodeSet.prototype.addNode = function (id) {
    if (this.getNodeById(id) !== null) {
        throw new Error("Node with id = " + id + " exists in this NodeSet");
    }
    var node = new Node(id);
    node.nodeset = this;
    this.nodes.push(node);
    this.nodeMap[id] = node;
    return node;
}

NodeSet.prototype.addLink = function (id0, id1, length) {
    var node0 = this.getNodeById(id0);
    var node1 = this.getNodeById(id1);

    if (node0 === null) throw new Error("No node with id=" + id0);
    if (node1 === null) throw new Error("No node with id=" + id1);

    var link = new Link(node0, node1, length);

    link.nodeset = this;

    node0.addLink(link);
    node1.addLink(link);

    this.links.push(link)

    return link;
}

NodeSet.prototype.removeLink = function (link) {
    var idx = this.links.indexOf(link);
    if (idx !== -1) {
        this.links.splice(idx, 1);
        link.dispose();
    }
}

NodeSet.prototype.removeNode = function (node) {
    
}

NodeSet.prototype.getNodeById = function (id) {
    var node = this.nodeMap[id];
    return node === undefined ? null : node;

}


module.exports = NodeSet;


