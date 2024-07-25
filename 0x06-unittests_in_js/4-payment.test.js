const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', () => {
  let calaculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub Utils.calculateNumber and verify console.log', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;
  });
});
