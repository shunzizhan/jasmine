# Jasmine
>  Jasmine是一个Javascript的BDD（Behavior-Driven Development）测试框架，不依赖任何其他框架。
>  - v 2.8
>  - time 2017-11-2

## 基本语法

### describe(string, function)
> 可以理解为是一个测试集或者测试包（为了便于称呼，我们本文中统一叫测试集，官方称之为suite），主要功能是用来划分单元测试的，describe是可以嵌套使用的
> - 参数string：描述测试包的信息
> - 参数function：测试集的具体实现

### it(string, function)
> 测试用例（官方称之为spec）
> - 参数string：描述测试用例的信息
> - 参数function：测试用例的具体实现

**说明**
- 每个测试文件中可以包含多个describe
- 每个describe中可以包含多个it
- 每个it中可以包含多个expect

### expect
> 断言表达式

#### toBe
基本类型判断
```javascript
 it("toBe and not.toBe", function() {
    expect(1).toBe(1);
    expect('a').not.toBe('b');
  });
```

#### toEqual
toEqual有两种用法，对于基本的类型，toEqual相当于toBe,toEqual还可以用来判断对象
```javascript
it("toEqual and not.toEqual for basic types", function(){
    expect(1).toEqual(1);
    expect('a').not.toEqual('b');
})
```
```javascript
it("toEqual and not.toEqual for objects", function(){
	    var o1 = {
	        name: "Jack",
	        age: 12
	    };
    
    var o2 = {
        name: "Jack",
        age: 12
    };
    
    var o3 = {
        name: "Tom",
        age: 13
    };
      
    expect(o1).toEqual(o2);
    expect(o1).not.toEqual(o3);
 })
```	

#### toMatch
使用正则表达式判断
```javascript
 it('toMatch and not.toMatch',function(){
		var str = 'shunzizhan@163.com';
		expect(str).toMatch(/shunzizhan/);
		expect(str).not.toMatch(/shunzizhan2/)
	})
```

#### toBeDefined
判断是否是undefined
#### toBeUndefined
判断是否是undefined，与toBeDefined相反
```javascript
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
```

#### toBeNull
判断是否是null
```javascript
 it('判断是否是null', function() {
    var obj = {
      name: 'shunzizhan',
      email: "shunzizhan@163.com",
      age: null
    }
    expect(obj.age).toBeNull()
    expect(obj.name).not.toBeNull()
  })
```

#### toBeTruthy
判断是否能转换成bool型，判断的是否是True
#### toBeFalsy
判断是否能转换成bool型，判断的是否是False
```javascript
 it('判断是否是null', function() {
    var obj = {
      name: 'shunzizhan',
      email: "shunzizhan@163.com",
      age: null
    }
    expect(obj.age).toBeNull()
    expect(obj.name).not.toBeNull()
  })
```

#### toContain
判断集合是否包含（可以是普通类型，和可以是对象）
```javascript
 it("toContain and not.toContain", function(){
    var arrStr = ["Jack", "Tom", "Mary"];
    var arrObj = [{name:"Jack",age:21}, {name:"Tom",age:22}];

    expect(arrStr).toContain("Jack");
    expect(arrStr).not.toContain("jack");
    
    expect(arrObj).toContain({name:"Jack",age:21});
    expect(arrObj).not.toContain({name:"jack",age:21});
  });
```

#### toBeLessThan
判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）
#### toBeGreaterThan
判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）
```javascript
it('判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）',function(){
		expect(1).toBeLessThan(1.1)
		expect('b')
})
it('判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）',function(){
		expect(1).not.toBeGreaterThan(1.1);
		expect('b').toBeGreaterThan('a')
})
```

#### toBeCloseTo
判断数字是否相似（第二个参数为小数精度，默认为2位）
```javascript
it('判断数字是否相似（第二个参数为小数精度，默认为2位）', function() {
    var a = 1.1;
    var b = 1.5;
    var c = 1.455;
    var d = 1.459;
    expect(a).toBeCloseTo(b, 0);
    expect(a).not.toBeCloseTo(c, 1)
    expect(c).toBeCloseTo(d)
  })
```

#### toThrow
判断是否抛出异常
```javascript
it("toThrow and not.toThrow", function(){
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });
```

#### toThrowError
判断是否抛出了指定的错误
```javascript
it("toThrowError and not.toThrowError", function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
  });
```

### Setup和Teardown
Jasmine允许在执行测试集/测试用例的开始前/结束后做一些初始化/销毁的操作。
- Setup方法：
	- beforeAll：每个suite（即describe）中所有spec（即it）运行之前运行
	- beforeEach：每个spec（即it）运行之前运行
- Teardown方法：
	- afterAll：每个suite（即describe）中所有spec（即it）运行之后运行
	- afterEach：每个spec（即it）运行之后运行

[示例代码](./spec/setup_teardown.js)

### xdescribe/xit的使用
在实际项目中，需要由于发布的版本需要选择测试用例包，xdescribe和xit能很方便的将不包含在版本中的测试用例排除在外。不过xdescribe和xit略有不同：
- xdescribe：该describe下的所有it将被忽略，Jasmine将直接忽略这些it，因此不会被运行
- xit：运行到该it时，挂起它不执行

[示例代码](./spec/xdescribe_xit.js)

### Spy
Spy用来追踪函数的调用历史信息（是否被调用、调用参数列表、被请求次数等）。Spy仅存在于定义它的describe和it方法块中，并且每次在spec执行完之后被销毁。
当在一个对象上使用spyOn方法后即可模拟调用对象上的函数，此时对所有函数的调用是不会执行实际代码的。示例1中包含了两个Spy常用的expect：
- toHaveBeenCalled: 函数是否被调用
- toHaveBeenCalledWith: 调用函数时的参数

[示例代码](./spec/Spy.js)

#### and.callThrough()
在使用Spy的同时也希望执行实际的代码, 通过在使用spyOn后面增加了链式调用and.CallThrough()，这将告诉Jasmine我们除了要完成对函数调用的跟踪，同时也需要执行实际的代码。
```javascript
 spyOn(foo, 'getBar').and.callThrough(); // 与示例1中不同之处在于使用了callThrough，这将时所有的函数调用为真实的执行
```
[示例代码](./spec/Spy_callThrough.js)

#### and.returnValue()
由于Spy是模拟函数的调用，因此我们也可以强制指定函数的返回值。
如果被调用的函数是通过从其他函数获取某些值，我们通过使用returnValue模拟函数的返回值。这样做的好处是可以有效的隔离依赖，使测试流程变得更简单。
```javascript
 spyOn(foo, "getBar").and.returnValue(745); // 这将指定getBar方法返回值为745
```
[示例代码](./spec/Spy_returnValue.js)

#### and.callFake()
与returnValue相似，callFake则更进一步，直接通过指定一个假的自定义函数来执行。这种方式比returnValue更灵活，我们可以任意捏造一个函数来达到我们的测试要求。
```javascript
 spyOn(foo, "getBar").and.callFake(function() {
          return 1001;
        });
```
[示例代码](./spec/Spy_callFake.js)

#### and.throwError()
throwError便于我们模拟异常的抛出。
```javascript
 spyOn(foo, "setBar").and.throwError("quux");
```
[示例代码](./spec/Spy_throwError.js)

#### and.stub
[示例代码](./spec/Spy_stub.js)

#### calls
- calls：对于被Spy的函数的调用，都可以在calls属性中跟踪。
- calls.any(): 被Spy的函数一旦被调用过，则返回true，否则为false；
- calls.count(): 返回被Spy的函数的被调用次数；
- calls.argsFor(index): 返回被Spy的函数的调用参数，以index来指定参数；
- calls.allArgs():返回被Spy的函数的所有调用参数；
- calls.all(): 返回calls的上下文，这将返回当前calls的整个实例数据；
- calls.mostRecent(): 返回calls中追踪的最近一次的请求数据；
- calls.first(): 返回calls中追踪的第一次请求的数据；
- object: 当调用all()，mostRecent()，first()方法时，返回对象的object属性返回的是当前上下文对象；
- calls.reset(): 重置Spy的所有追踪数据；

[示例代码](./spec/Spy_calls.js)

#### createSpy
假如没有函数可以追踪，我们可以自己创建一个空的Spy。创建后的Spy功能与其他的Spy一样：跟踪调用、参数等，但该Spy没有实际的代码实现，这种方式经常会用在对JavaScript中的对象的测试。
```javascript
 whatAmI = jasmine.createSpy('whatAmI');
```
[示例代码](./spec/Spy_createSpy.js)

#### createSpyObj
如果需要spy模拟多个函数调用，可以向jasmine.createSpyObj中传入一个字符串数组，它将返回一个对象，你所传入的所有字符串都将对应一个属性，每个属性即为一个Spy。
```javascript
 tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
```
[示例代码](./spec/Spy_createSpyObj.js)
## 参考文献
- [jasmine入门](http://www.cnblogs.com/wushangjue/p/4541209.html)