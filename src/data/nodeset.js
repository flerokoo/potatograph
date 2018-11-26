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
    
    // TODO add check if link exists

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
        link.node0.removeLink(link)
        link.node1.removeLink(link)
        link.node0 = link.node1 = link.nodeset = null;
    }
}

NodeSet.prototype.forEach = function (callback) {    
    if (typeof callback !== 'function') {
        throw new Error('Callback should be a function');      
    }

    for (var i = 0; i < this.nodes.length; i++) {
        callback(this.nodes[i]);
    }

    return this;
}

NodeSet.prototype.forEachPair = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback should be a function');        
    }

    var nodes = this.nodes;
    var n = this.nodes.length;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            callback(nodes[i], nodes[j]);
        }
    }

    return this;
}

NodeSet.prototype.linkBy = function (condition) {

    if (typeof condition !== 'function') {
        throw new Error('Condition should be a function');
    }

    return this.forEachPair(function (n1, n2) {
        if (condition(n1, n2)) {
            this.addLink(n1, n2);
        }
    })
}

NodeSet.prototype.getLinkBetween = function(node0, node1) {
    if (typeof node0 === 'number') {
        node0 = this.getNodeById(node0);
    }
    
    return node0.getLinkTo(node1);
}

NodeSet.prototype.linkExists = function (node0, node1) {
    return this.getLinkBetween(node0, node1) !== null;
}

NodeSet.prototype.removeNode = function (node) { 
    
    if (typeof node === 'number') {
        node = this.getNodeById(node);        
    }
    
    if (node) {
        var idx = this.nodes.indexOf(node);

        if (idx !== -1) {
            this.nodes.splice(idx, 1);
            this.nodeMap[node.id] = undefined;
            node.nodeset = null;
        }
    }
}

NodeSet.prototype.getNodeById = function (id) {
    var node = this.nodeMap[id];
    return node === undefined ? null : node;
}

NodeSet.prototype.clone = function () {
    
}

NodeSet.fromDOT = function (dot) {
    
}

module.exports = NodeSet;


