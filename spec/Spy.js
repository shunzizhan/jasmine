(function() {
  describe("A spy", function() {
    var foo, bar = null;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        }
      };

      spyOn(foo, 'setBar'); // 在foo对象上添加spy

      // 此时调用foo对象上的方法，均为模拟调用，因此不会执行实际的代码
      foo.setBar(123); // 调用foo的setBar方法
      foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function() {
      expect(foo.setBar).toHaveBeenCalled(); //判断foo的setBar是否被调用
    });

    it("tracks all the arguments of its calls", function() {
      expect(foo.setBar).toHaveBeenCalledWith(123); //判断被调用时的参数
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
      expect(bar).toBeNull(); // 由于是模拟调用，因此bar值并没有改变
    });
  });
})();