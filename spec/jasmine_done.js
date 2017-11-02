(function() {
  describe("Asynchronous specs", function() {
    var value;

    beforeEach(function(done) {
      setTimeout(function() {
        value = 0;
        done();
      }, 1);
    });

    // 在上面beforeEach的done()被执行之前，这个测试用例不会被执行
    it("should support async execution of test preparation and expectations", function(done) {
      value++;
      expect(value).toBeGreaterThan(0);
      done(); // 执行完done()之后，该测试用例真正执行完成
    });

    // Jasmine异步执行超时时间默认为5秒，超过后将报错
    describe("long asynchronous specs", function() {

      // 如果要调整指定用例的默认的超时时间，可以在beforeEach，it和afterEach中传入一个时间参数
      beforeEach(function(done) {
        // setTimeout(function(){}, 2000); // 可以试试如果该方法执行超过1秒时js会报错
        done();
      }, 1000);

      it("takes a long time", function(done) {
        setTimeout(function() {
          done();
        }, 9000);
      }, 10000);

      afterEach(function(done) {
        done();
      }, 1000);
    });
  });
})();