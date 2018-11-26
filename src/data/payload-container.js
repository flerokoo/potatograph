
function PayloadContainer() {
    this.payload = null;
}

PayloadContainer.prototype.setPayload = function (payload) {
    this.payload = payload;
    return this;
}

PayloadContainer.prototype.addPayload = function (name, value, overwrite) {
   
    if (arguments.length === 1 && typeof name === 'object') {
        for (var i in name) {
            this.addPayload(i, name[i], overwrite);
        }
    } else {
        if (this.payload === null) {
            this.payload = {};
        }

        if (overwrite !== true && this.payload[name] !== undefined) {
            throw new Error("This container already have payload named " + name);
        }

        this.payload[name] = value;
    }

    return this;
}

PayloadContainer.prototype.removePayload = function (name) {
    if (this.payload !== null) {
        this.payload[name] = undefined;
    }
    return this;
}

PayloadContainer.prototype.getPayload = function (name) {
    if (this.payload === null) return null;
    return this.payload[name] === undefined ? null : this.payload[name];
}

module.exports = PayloadContainer;