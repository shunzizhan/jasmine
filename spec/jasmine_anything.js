(function(){
    describe("jasmine.anything", function() {
      it("matches anything", function() {
        expect(1).toEqual(jasmine.anything());
      });

      describe("when used with a spy", function() {
        it("is useful when the argument can be ignored", function() {
          var foo = jasmine.createSpy('foo');
          foo(12, function() {
            return false;
          });

          expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
        });
      });
    });
})();