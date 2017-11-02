// 在实际项目中，需要由于发布的版本需要选择测试用例包，
// xdescribe和xit能很方便的将不包含在版本中的测试用例
// 排除在外。不过xdescribe和xit略有不同：
// - xdescribe：该describe下的所有it将被忽略，Jasmine将直接忽略这些it，因此不会被运行
// - xit：运行到该it时，挂起它不执行


(function() {
  xdescribe("Test xdescribe", function() {
    it("Spec 1", function() {
      expect(1).toBe(1);
    });

    it("Spec 2", function() {
      expect(2).toBe(2);
    });
  });

  describe("Test xit", function() {
    it("Spec 1", function() {
      expect(1).toBe(1);
    });

    xit("Spec 2", function() {
      expect(2).toBe(1);
    });

    xit("Spec 3", function() {
      expect(3).toBe(3);
    });
  });
})();