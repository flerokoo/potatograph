
function pullToCenterFactory(coeff) {

    coeff = coeff || 1;

    return function pullToCenter(dt, nodes, links) {
        for (var k = 0, m = nodes.length; k < m; k++) {
            var node = nodes[k];
            node.applyImpulse(-node.position.x * coeff * dt, -node.position.y * coeff * dt);
        }
    }
}

pullToCenterFactory.default = pullToCenterFactory();

module.exports = pullToCenterFactory;