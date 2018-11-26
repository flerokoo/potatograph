var NodeSet = require('../../src/data/nodeset');

describe("NodeSet", function () {
    
    var set = new NodeSet();
    beforeEach(function () {
        set = new NodeSet();
    })

    describe("addNode", function () {
        
        it("should throw when trying to add new node with id of other node in the set");

        it("should add node to nodes array");

        it("should add node to nodes map");

        it("should set nodeset property of the node");

        it("should return new node (instance of Node)");

    });

    describe("removeNode", function () {
        it("should remove node from NodeSet.nodes array and NodeSet.nodeMap object");

        it("should remove node when given Node instance");

        it("should remove node when given Node id");
    });

    describe("addLink", function () {
        it("shouldn't add new link between already linked nodes");
        
        it("should add link to NodeSet.links, node0.links and node1.links arrays");
    });

    describe("removeLink", function () {
        it("should remove link from NodeSet.links, link.node0.links and link.node1.links arrays");
    });

    describe("getLinkBetween", function () {
        it("should return link when given two node instances");
            
        it("should return link when given two node ids (as numbers)");

        it("should return link when given node instance and node id (in any order)");
    });

})