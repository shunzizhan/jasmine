(function() {
  describe("A spy, when configured to call through", function() {
    var foo, bar, fetchedBar;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        },
        getBar: function() {
          return bar;
        }
      };

      spyOn(foo, 'getBar').and.callThrough(); // 与示例1中不同之处在于使用了callThrough，这将时所有的函数调用为真实的执行
      //spyOn(foo, 'getBar'); // 可以使用示例1中的模拟方式，看看测试集执行的结果

      foo.setBar(123);
      fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function() {
      expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function() {
      expect(bar).toEqual(123); // 由于是真实调用，因此bar有了真实的值
    });

    it("when called returns the requested value", function() {
      expect(fetchedBar).toEqual(123); // 由于是真实调用，fetchedBar也有了真实的值
    });
  });
})();