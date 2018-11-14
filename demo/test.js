


// create Nodeset instance
var nodeset = new Potatograph.NodeSet();


// fill Nodeset with nodes
(function() {

    function generateDefault() {
        nodeset.addNode(0);
        nodeset.addNode(1);
        nodeset.addNode(2);
        nodeset.addNode(3);
        nodeset.addLink(0, 1);
        nodeset.addLink(0, 2);
        nodeset.addLink(1, 2);
        nodeset.addLink(3, 2);
        nodeset.addLink(1, 3);
    }

    function generateRandom(n) {
        for (var i = 0; i < n; i++) {
            nodeset.addNode(i);
        }

        var ln = n;
        for (var i = 0; i < ln; i++) {
            if (nodeset.links.some(e => (e.node0 == i0 && e.node1 == i1) || (e.node1 == i0 && e.node0 == i1))) {
                continue; // skip existing
            }
            var i0 = Math.floor(Math.random() * n);
            var i1 = Math.floor(Math.random() * n);
            nodeset.addLink(i0, i1)
        }
    }

    function generateTree(levels, perLevelMax, perLevelMin) {
    
        var lastLevel = [0];
        var lastNodeId = 0;
    
        var root = nodeset.addNode(0).addPayload("alignLevel", 0);
        root.fixed = true;

        for (var level = 1; level <= levels; level++) {
            var thisLevel = []

            var perLevelCurrent = Math.round(Math.random() * (perLevelMax - perLevelMin)) + perLevelMin;
            for (var i = 0; i < perLevelCurrent; i++) {
                var id = ++lastNodeId;
                thisLevel.push(id)
                var node = nodeset.addNode(id);
                node.position.y = level * 50;
                nodeset.addLink(id, lastLevel[Math.floor(Math.random() * lastLevel.length)])
                node.addPayload("alignLevel", level)
            }
        
            lastLevel = thisLevel;
        }
    }

    generateTree(6, 10, 1)
})();



// create and configure solver
var solver = new Potatograph.Solver(nodeset);
solver.addSimulationEffector(Potatograph.effectors.simulation.springlinks.default)
// solver.addSimulationEffector(Potatograph.effectors.simulation.pullToCenter.default)
solver.addSimulationEffector(Potatograph.effectors.simulation.friction.default)
solver.addSimulationEffector(Potatograph.effectors.simulation.repulsion.default)
// solver.addSimulationEffector(Potatograph.effectors.simulation.verticalAlign.default)
solver.addSimulationEffector(Potatograph.effectors.simulation.radialAlign.default)



// bootstrap PIXI visualization
var app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);
window.addEventListener("resize", function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
})


// create graphics, where all the nodes will be drawn
var graphics = new PIXI.Graphics();
app.stage.addChild(graphics);


// draw parameters
var cameraOffsetX = window.innerWidth/2;
var cameraOffsetY = window.innerHeight / 2;
var cameraScale = 1;

function loop() {

    // perform step of simulation
    solver.step();

    // draw links and nodes
    graphics.clear();
    
    graphics.lineStyle(2, 0xff0000);
    for (let i = 0; i < nodeset.links.length; i++) {
        var link = nodeset.links[i];
        var node0 = link.node0;
        var node1 = link.node1;
        graphics.moveTo(
            node0.position.x * cameraScale + cameraOffsetX,
            node0.position.y * cameraScale + cameraOffsetY,
            5);
        graphics.lineTo(
            node1.position.x * cameraScale + cameraOffsetX,
            node1.position.y * cameraScale + cameraOffsetY,
            5);
    }
    graphics.lineStyle(0)
    
    graphics.beginFill(0xffff00);
    for (let i = 0; i < nodeset.nodes.length; i++) {
        var node = nodeset.nodes[i];
        graphics.drawCircle(node.position.x * cameraScale + cameraOffsetX, node.position.y * cameraScale + cameraOffsetY, 5);
    }
    graphics.endFill();

    // request next animation frame
    requestAnimationFrame(loop.bind(this));
}

loop(); // initiate loop


