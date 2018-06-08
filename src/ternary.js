const Then = function (whn, thn) {
    this.whn = whn;
    this.thn = thn;
};

Then.prototype.else = function (els) {
    return (typeof this.whn === 'function' ? this.whn() : this.whn)
        ? (typeof this.thn === 'function' ? this.thn() : this.thn)
        : (typeof els === 'function' ? els() : els);
};

const When = function (whn) {
    this.whn = whn;
};

When.prototype.then = function (thn) {
    return new Then(this.whn, thn)
};

const when = function (whn) {
    return new When(whn);
};

exports.when = when;

