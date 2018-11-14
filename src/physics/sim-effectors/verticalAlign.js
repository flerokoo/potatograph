
function verticalAlignFactory(levelDistance, coeff) {

    levelDistance = levelDistance || 100;
    coeff = coeff || 0.3;

    return function verticalAlign(dt, nodes, links) {
        for (var k = 0, m = nodes.length; k < m; k++) {            
            var node = nodes[k]; 
            var level = node.getPayload("alignLevel");

            if (typeof level !== 'number') {
                throw new Error("verticalAlign effector requires payload: [number] alignLevel");
            }

            var target = levelDistance * level;
            var distance = target - node.position.y;

            node.applyImpulse(0, dt * distance * coeff)
        }
    }
}

verticalAlignFactory.default = verticalAlignFactory();
module.exports = verticalAlignFactory