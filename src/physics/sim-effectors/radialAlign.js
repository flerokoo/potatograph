
function radialAlignFactory(levelDistance, coeff) {

    levelDistance = levelDistance || 100;
    coeff = coeff || 0.8;

    return function radialAlign(dt, nodes, links) {
        for (var k = 0, m = nodes.length; k < m; k++) {            
            var node = nodes[k]; 
            var level = node.getPayload("alignLevel");

            if (typeof level !== 'number') {
                throw new Error("radialAlign effector requires payload: [number] alignLevel");
            }

            var target = levelDistance * level;

            var dx = node.position.x;
            var dy = node.position.y;

            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= 0) {
                distance = 0.01;
            }

            var error = (target - distance) / distance;
            
            node.applyImpulse(dt * error * dx * coeff, dt * error * dy * coeff)
        }
    }
}

radialAlignFactory.default = radialAlignFactory();
module.exports = radialAlignFactory