(function() {
  var globalCount;
  describe("Setup and Teardown suite 1", function() {
    var suiteGlobalCount;
    var eachTestCount;

    beforeAll(function() {
      globalCount = 0; // 试试注释这行代码，看看对运行结果的影响
      suiteGlobalCount = 0;
      eachTestCount = 0;
    });

    afterAll(function() {
      //globalCount = 0; // 试试取消这行代码的注释，看看对运行结果的影响
      suiteGlobalCount = 0;
    });

    beforeEach(function() {
      globalCount++;
      suiteGlobalCount++;
      eachTestCount++;
    });

    afterEach(function() {
      eachTestCount = 0;
    });

    it("Spec 1", function() {
      expect(globalCount).toBe(1);
      expect(suiteGlobalCount).toBe(1);
      expect(eachTestCount).toBe(1);
    });

    it("Spec 2", function() {
      expect(globalCount).toBe(2);
      expect(suiteGlobalCount).toBe(2);
      expect(eachTestCount).toBe(1);
    });
  });

  describe("Setup and Teardown suite 2", function() {
    beforeEach(function() {
      globalCount += 2;
    });

    it("Spec 1", function() {
      expect(globalCount).toBe(4);
    });
  });
})();

// 在beforeEach/it/afterEach中，还可以使用this关键字定义变量，
// 需要注意的是，使用this关键字声明的变量，
// 仅在beforeEach/it/afterEach这个过程中传递：
(function(){
    describe("Test 'this'", function() {
      beforeEach(function() {
        this.testCount = this.testCount || 0;
        this.testCount++;
      });

      afterEach(function() {
        //this.testCount = 0; //无论是否有这行，结果是一样的，因为this指定的变量只能在每个spec的beforeEach/it/afterEach过程中传递
      });
        
      it("Spec 1", function() {
        expect(this.testCount).toBe(1);
      });
      
      it("Spec 2", function() {
        expect(this.testCount).toBe(1);
      });
    });
})();