const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7,), -5);
  });

  it('should handle zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
  });

  it('should handle large nubmers', function() {
    assert.strictEqual(calculateNumber(10000000.4, 10000000.4), 20000000);
    assert.strictEqual(calculateNumber(10000000.5, 10000000.5), 20000002);
  });

  it('should handle floating point precision', function() {
    assert.strictEqual(calculateNumber(0.1 + 0.2, 0), 0);
    assert.strictEqual(calculateNumber(0.1 + 0.2, 0.1), 0);
  });
});
