
function springlinksFactory(coeff) {

    coeff = coeff || 3.6;

    return function springlinks(dt, nodes, links) {
        for (var k = 0, m = nodes.length; k < m; k++) {            
            var node = nodes[k]; 
            for (var i = 0, n = node.links.length; i < n; i++) {
                var link = node.links[i];
                var other = link.getOther(node);
                
                var dx = other.position.x - node.position.x;
                var dy = other.position.y - node.position.y;
                
                if (dx === 0 && dy === 0) {
                    // prevent overlapping nodes
                    dx = Math.random() - 0.5;
                    dy = Math.random() - 0.5;
                }
                
                var targetDistance = link.length;
                
                var distance = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);
                var force = coeff * (distance - targetDistance) / distance;
                
                node.applyImpulse(dx * force * dt, dy * force * dt);
            }
        }
    }
}

springlinksFactory.default = springlinksFactory();
module.exports = springlinksFactory