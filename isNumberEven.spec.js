const NumbersValidator = require('D:/np/app/numbers_validator');
const {expect} = require('chai');

describe('is NumberEven positive scenario', function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return true if number even', function() {
    expect(validator.isNumberEven(5)).to.be.equal(true);
  });
});
