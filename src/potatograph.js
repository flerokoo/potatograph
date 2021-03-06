var Solver = require("./physics/solver");
var NodeSet = require("./data/nodeset");
var springlinks = require("./physics/sim-effectors/springlinks");
var pullToCenter = require("./physics/sim-effectors/pull-to-center");
var friction = require("./physics/sim-effectors/friction");
var repulsion = require("./physics/sim-effectors/repulsion");
var verticalAlign = require("./physics/sim-effectors/verticalAlign");
var radialAlign = require("./physics/sim-effectors/radialAlign");

module.exports = {
    Solver,
    NodeSet,
    effectors: {
        simulation: {
            springlinks,
            pullToCenter,
            friction,
            repulsion,
            verticalAlign,
            radialAlign
        }
    }
}