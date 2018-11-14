
function Solver(nodeset) {
    this.nodeset = nodeset;
    this.timestep = 1 / 30;
    this.simulationEffectors = [];
    this.layoutEffectors = [];
}

Solver.prototype.step = function () {
    var nodes = this.nodeset.nodes;
    var links = this.nodeset.links;
    var dt = this.timestep;
    
    var effectors = this.simulationEffectors;
    for (var j = 0, m = effectors.length; j < m; j++) {
        effectors[j](dt, nodes, links)
    }

    for (var i = 0, n = nodes.length; i < n; i++) {
        var node = nodes[i];
        node.saveState();
        node.step(dt);    
    }    
}


Solver.prototype.addSimulationEffector = function(executor) {
    this.simulationEffectors.push(executor)
}

Solver.prototype.addLayoutEffector = function(executor, weight) {
    this.layoutEffectors.push({
        executor: executor,
        weight: weight || 1
    })
}

module.exports = Solver;