describe('My first jasmine test', function() {
  it('a spec with an expectation', function() {
    expect(1).toBe(1);
    expect(1 === 1).toBe(true);
    expect('a').not.toBe('b');
  })

  it('an other spec in current suite', function() {
    expect(true).toBe(true)
  })

  describe('这是一个嵌套的测试集', function() {
    it('嵌套测试用例A-1+2=3', function() {
      var s = 1 + 2;
      expect(s).toBe(3);
    })
  })
})

describe('My first Jasmine test2', function() {
  it('nothing', function() {})
})

describe('toBe', function() {
  it('toBe and not.toBe', function() {
    expect(1).toBe(1)
    expect(1).not.toBe(0);
  })
})

describe('toEqual', function() {
  it('toEqual 基本类型的判断', function() {
    expect(1).toEqual(1)
    expect('a').not.toEqual('b');
  })
  it('toEqual 对象的判断', function() {
    var obj = {
      name: 'shunzizhan',
      email: "shunzizhan@163.com"
    }
    var obj2 = {
      name: 'shunzizhan',
      email: "shunzizhan@163.com"
    }
    var obj3 = {
      name: 'shunzi',
      email: "shunzizhan@163.com"
    }
    expect(obj).toEqual(obj2);
    expect(obj).not.toEqual(obj3)
  })
})

describe('toMatch', function() {
  it('toMatch and not.toMatch', function() {
    var str = 'shunzizhan@163.com';
    expect(str).toMatch(/shunzizhan/);
    expect(str).not.toMatch(/shunzizhan2/)
  })
})

describe('toBeDefined && toBeUndefined', function() {
  var obj = {
    name: 'shunzizhan',
    email: "shunzizhan@163.com"
  }
  it('判断是否是undefined,取否', function() {

    expect(obj.name).toBeDefined();
    expect(obj.age).not.toBeDefined();
  })
  it('判断是否是undefined,取是', function() {
    expect(obj.age).toBeUndefined();
    expect(obj.name).not.toBeUndefined();
  })
})

describe('toBeNull', function() {
  it('判断是否是null', function() {
    var obj = {
      name: 'shunzizhan',
      email: "shunzizhan@163.com",
      age: null
    }
    expect(obj.age).toBeNull()
    expect(obj.name).not.toBeNull()
  })
})

describe('toBeTruthy && toBeFalsy', function() {
  var stu1;
  var stu2 = "shunzizhan";
  it('toBeTruthy判断是否能转换成bool型，判断的是否是True', function() {
    expect(true).toBeTruthy()
    expect(stu2).toBeTruthy()
    expect(stu1).not.toBeTruthy()
    expect(undefined).not.toBeTruthy()
  })
  it('toBeFalsy判断是否能转换成bool型，判断的是否是false', function() {
    expect(true).not.toBeFalsy()
    expect(stu1).toBeFalsy()
    expect(stu2).not.toBeFalsy()
    expect(undefined).toBeFalsy()
  })
})

describe('toContain', function() {
  it("toContain and not.toContain", function() {
    var arrStr = ["Jack", "Tom", "Mary"];
    var arrObj = [{ name: "Jack", age: 21 }, { name: "Tom", age: 22 }];

    expect(arrStr).toContain("Jack");
    expect(arrStr).not.toContain("jack");

    expect(arrObj).toContain({ name: "Jack", age: 21 });
    expect(arrObj).not.toContain({ name: "jack", age: 21 });
  });
})

describe('toBeLessThan && toBeGreaterThan', function() {
  it('判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）', function() {
    expect(1).toBeLessThan(1.1)
    expect('b')
  })
  it('判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）', function() {
    expect(1).not.toBeGreaterThan(1.1);
    expect('b').toBeGreaterThan('a')
  })
})

describe('toBeCloseTo', function() {
  it('判断数字是否相似（第二个参数为小数精度，默认为2位）', function() {
    var a = 1.1;
    var b = 1.5;
    var c = 1.455;
    var d = 1.459;
    expect(a).toBeCloseTo(b, 0);
    expect(a).not.toBeCloseTo(c, 1)
    expect(c).toBeCloseTo(d)
  })
})