const mathfunctions = require("../../math");

describe("check the math function", () => {
  it('test connection', () => {
    console.log("mathfunctions: ", mathfunctions);
  });

  it("check the add function", () => {
    const result = mathfunctions(2, 3);
    expect(result).to.equal(5);
  });

  
  it("check the add function", () => {
    const result = mathfunctions(2, 3);
    expect(result).to.equal(3+2);
  });

  it("check the a was undefined", () => {
    const result = mathfunctions(undefined, 3);
    expect(result).to.equal("Both arguments must be numbers");
  });

  it("check the b was undefined", () => {
    const result = mathfunctions(2, undefined);
    expect(result).to.equal("Both arguments must be numbers");
  });

  it("check both a & b was undefined", () => {
    const result = mathfunctions(undefined, undefined);
    expect(result).to.equal("Both arguments must be numbers");
  });

  it("check the a was not number value", () => {
    const result = mathfunctions("niranjan", 3);
    expect(result).to.equal("Both arguments must be numbers");
  });

  it("check the b was not number value", () => {
    const result = mathfunctions(10, "tester");
    expect(result).to.equal("Both arguments must be numbers");
  });

  it("check the a and b was not number value", () => {
    const result = mathfunctions("niranjan", "tester");
    expect(result).to.equal("Both arguments must be numbers");
  });
});
