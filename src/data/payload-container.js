
function PayloadContainer() {
    this.payload = null;
}

PayloadContainer.prototype.setPayload = function (payload) {
    this.payload = payload;
    return this;
}

PayloadContainer.prototype.addPayload = function (name, value) {
    if (this.payload === null) {
        this.payload = {};
    }

    this.payload[name] = value;
    return this;
}

PayloadContainer.prototype.getPayload = function (name) {
    if (this.payload === null) return null;
    return this.payload[name] === undefined ? null : this.payload[name];
}

module.exports = PayloadContainer;