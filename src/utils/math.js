

function lerp(t, a, b) {
    return t * (b - a) + a;
}

function clamp(t, a, b) {
    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    return Math.min(b, Math.max(t, a));
}

function clamp01(t) {
    return clamp(t, 0, 1);
}

function map (t, a, b, mapA, mapB) {
    var t1 = clamp01((t - a) / (b - a));
    return lerp(t1, mapA, mapB);
}

module.exports = {
    map: map,
    lerp: lerp,
    clamp: clamp,
    clamp01: clamp01
}
