
var map = require("../../utils/math").map;

function repulsionFactory(coeff, minDist, maxDist) {

    coeff = coeff || 900;
    minDist = minDist || 0;
    maxDist = maxDist || 100;

    return function springlinks(dt, nodes, links) {
        for (var i = 0, n = nodes.length; i < n; i++) {
            var node0 = nodes[i]
            for (var j = i+1, m = nodes.length; j < m; j++) {
                var node1 = nodes[j];
                
                var dx = node1.position.x - node0.position.x;
                var dy = node1.position.y - node0.position.y;
                
                if (dx === 0 && dy === 0) {
                    // prevent overlapping nodes
                    dx = Math.random() - 0.5;
                    dy = Math.random() - 0.5;
                }

                var distance = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);
                var force = map(distance, minDist, maxDist, 1, 0) * coeff / distance;
                var ix = dt * dx * force;
                var iy = dt * dy * force;
                node1.applyImpulse(ix, iy);
                node0.applyImpulse(-ix, -iy);
            }
        }
    }
}

repulsionFactory.default = repulsionFactory();
module.exports = repulsionFactory