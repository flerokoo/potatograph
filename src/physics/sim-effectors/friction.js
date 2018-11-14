function frictionFactory(coeff) {
    
    coeff = coeff || 1.5;

    return function (dt, nodes, links) {
        for (var k = 0, m = nodes.length; k < m; k++) {
            var node = nodes[k];
            node.applyImpulse(-node.velocity.x * coeff * dt, -node.velocity.y * coeff * dt);            
        }
    }
}


frictionFactory.default = frictionFactory();
module.exports = frictionFactory;