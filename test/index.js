var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
    
  describe('is.array', function(){
        it('should return true if passed argument type is Array', function(){
            expect(is.array(['value1', 'value2'])).to.be.true;
        });
        it('should return false if passed argument type is not Array', function(){
            expect(is.array('what')).to.be.false;
        });
    });
    
    
  describe('is.boolean', function(){
	    it('should return true if argument type is boolean', function() {
		  expect(is.boolean(true)).to.be.true;
		  expect(is.boolean(false)).to.be.true;
	   }); 
	    it('should return true if argument type is not boolean', function() {
		  expect(is.boolean('what')).to.be.false;
	}); 
  });
    
      describe('is.object', function(){
	    it('should return true if argument type is object', function() {
          var objet = {};
          function mafonction(){};
		  expect(is.object(objet)).to.be.true;
		  expect(is.object(mafonction)).to.be.true;
	   }); 
	    it('should return true if argument type is not object', function() {
		  expect(is.object('what')).to.be.false;
	}); 
  });
    
    
          describe('is.json', function(){
	    it('should return true if argument type is json', function() {
          var myJSONObject = {"bindings": [
        {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},
        {"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},
        {"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}
    ]
};
		  expect(is.json(myJSONObject)).to.be.true;
	   }); 
	    it('should return true if argument type is not json', function() {
		  expect(is.json('what')).to.be.false;
	}); 
  });
    
    
describe('is.sameType',function(){ 
    it('should return true if passed parameter type is sameType',function(){ 
        var type1 =45; 
        var type2 =35;
    expect(is.sameType(type1,type2)).to.be.true; });
    it("should return false if passed parameter type is not sameType", function () {           var type11 = 't'; 
        var type22 =1; 
    expect(is.sameType(type11, type22)).to.be.false; }); }); 
});


      describe('is.char', function(){
	it('should return true if passed argument type is a char', function() {
		expect(is.char('c')).to.be.true;
	}); 
    it('should return false if passed argument type is not a char', function(){
		expect(is.char("stng")).to.be.false;
		expect(is.char(11)).to.be.false;
		expect(is.char(null)).to.be.false;
		
	});
          
  describe('is.date', function(){
	var a = new Date();
	it('should return true if passed argument type is date', function() {
		expect(is.date(a)).to.be.true;
	}); 
    it('should return false if passed argument type is date', function(){
		expect(is.date('what')).to.be.false;
	});	
  });
          
  describe('is.error', function(){
	var er = new Error();
	it('should return true if passed argument type is error', function() {
		expect(is.error(er)).to.be.true;
	}); 
    it('should return false if passed argument type is error', function(){
		expect(is.date('what')).to.be.false;
	});	
  });
          
          
  describe('is.function', function(){
	function func(){};
	it('should return true if passed argument type is function', function() {
		expect(is.function(func)).to.be.true;
	}); 
    it('should return false if passed argument type is not a function', function(){
		expect(is.function('what')).to.be.false;
	});	
  });

              describe('is.nan', function(){
	it('should return true if passed argument type is NaN', function() {
		expect(is.nan(NaN)).to.be.true;
	}); 
    it('should return false if passed argument type is a number', function(){
		expect(is.nan(11)).to.be.false;
	});	
  });
  
      describe('is.null', function(){
	it('should return true if passed argument type is null', function() {
		expect(is.null(null)).to.be.true;
	}); 
    it('should return false if passed argument type is not null', function(){
		expect(is.null('what')).to.be.false;
	});	
  });
  
    describe('is.regexp', function(){
	var a = new RegExp('ab+c', 'i');
	it('should return true if passed argument type is a regexp', function() {
		expect(is.regexp(a)).to.be.true;
	}); 
    it('should return false if passed argument type is not a regexp', function(){
		expect(is.regexp('what')).to.be.false;
	});	
  });
          
  describe('is.string', function(){
	it('should return true if passed argument type is a string', function() {
		expect(is.string('stng')).to.be.true;
	}); 
    it('should return false if passed argument type is not a string', function(){
		expect(is.string(11)).to.be.false;
		expect(is.string(null)).to.be.false;
		
	});	
  });
          
          describe('is.empty', function(){
              it('should return false if passed argument type is empty', function(){
              var str= [];
              str.length == 0
              expect(is.empty(str)).to.be.true;
              });
              it('should return false if passed argument type is not empty', function(){
		expect(is.empty(['what'])).to.be.false;
          
});});
              });