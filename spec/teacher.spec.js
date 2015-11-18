describe("happy teacher", function() {
  it("should make a new object with correct properties", function() {
    var testTeach = new Teacher('1 + 2 = 3');
    expect(testTeach).toBeDefined();
    expect(testTeach.equation).toBe('1 + 2 = 3');
  });

  it("should return an SVG element", function() {
    var testTeach = new Teacher('does it matter');
    var testSvgElement = testTeach.createEquation();
    expect(testSvgElement).toEqual(jasmine.any(Object));
    expect(testSvgElement.tagName).toEqual('svg');
  });

  it("should have an optional font size option", function() {
    var testTeach = new Teacher('foo = bar');
    expect(testTeach.fontSize).toEqual(40);
    testTeach.fontSize = 50;
    expect(testTeach.fontSize).toEqual(50);
  });
});