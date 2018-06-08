const { when } = require('./ternary');
const { expect } = require('chai');

const test = function (arr) {
    return when(() => arr.length > 0)
        .then(() => when(() => arr[0] === null)
            .then(() => 'Null Element')
            .else(() => when(() => arr[0] === 1)
                .then(() => '1')
                .else(() => 'Other')
            )
        )
        .else(() => 'Empty array');
};

describe('Test', function () {
    it('[] => Empty array', function () {
        expect(test([])).to.be.equal('Empty array');
    });

    it('[null] => Null Element', function () {
        expect(test([null])).to.be.equal('Null Element');
    });

    it('[1] => 1', function () {
        expect(test([1])).to.be.equal('1');
    });

    it('[2] => Other', function () {
        expect(test([2])).to.be.equal('Other');
    });

    it('Expr', function () {
        const obj = {};
        const res = when(obj).then('Value').else('Null');
        console.log(res);
    });

    it('Expr 2', function () {
        const obj = null;
        const res = when(obj)
            .then(() => when(obj.a)
                .then(when(obj.a == 1)
                    .then('1')
                    .else('Other')
                )
                .else('Undefined')
            )
            .else('Obj null');
        console.log(res);
    });
});