console.log("welcome to maths magic");

let calc =function Calculator(num){
    return {
     answer : num ? num : 0,
     equals : function() {
       return this.answer
     },
     add : function(num) {
       this.answer += num ? num : 1
       return this
     },
     subtract : function(num) {
       this.answer -= num ? num : 1
       return this
     },
     multiply : function(num) {
       this.answer *= num ? num : 1
       return this
     },
     divide : function(num) {
       this.answer /= num ? num : 1
       return this
     },
     invert : function(num) {
       this.answer = this.answer * -1
       return this
     }, 
     clear : function() {
       this.answer = 0
       return this
     }
    }
   }
   
   var calc = new Calculator()
   
   console.log("Calculator adds multiple and divide")
   calc.add(4).multiply(10).divide(4)
   console.log("Calculator = " + calc.equals())
   
   console.log("Calculator adds one to the answer")
   calc.add()
   console.log("Calculator = " + calc.equals())
   
   console.log("Calculator inverts the answer")
   calc.invert()
   console.log("Calculator = " + calc.equals())
   
   console.log("Calculator resets")
   calc.clear()
   console.log("Calculator = " + calc.equals())
   
   console.log("new calculator starts and finds the remainder after dividing ")
   var calculator = new Calculator(9).modulo(3)
   console.log("Calculator = " + calculator.equals())