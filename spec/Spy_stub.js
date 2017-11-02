(function() {
  describe("A spy", function() {
    var foo, bar = null;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        },
        getBar: function() {
          return bar;
        }
      };

      spyOn(foo, 'setBar').and.callThrough(); // 标记1
      spyOn(foo, 'getBar').and.returnValue(999); // 标记2
    });

    it("can call through and then stub in the same spec", function() {
      foo.setBar(123);
      expect(bar).toEqual(123);

      var getValue = foo.getBar();
      expect(getValue).toEqual(999);

      foo.setBar.and.stub(); // 相当于'标记1'中的代码变为了spyOn(foo, 'setBar')
      foo.getBar.and.stub(); // 相当于'标记2'中的代码变为了spyOn(foo, 'getBar')
      bar = null;

      foo.setBar(123);
      expect(bar).toBe(null);
      expect(foo.setBar).toHaveBeenCalled(); // 函数调用追踪并没有被重置

      getValue = foo.getBar();
      expect(getValue).toEqual(undefined);
      expect(foo.getBar).toHaveBeenCalled(); // 函数调用追踪并没有被重置
    });
  });
})();