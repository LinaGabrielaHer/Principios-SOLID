class Numbers{
    numbersArray = [1,2,3,4,5,6,7,8,9]
    response = []
    
    constructor(range){
      this.range = range
      this.getNumbersFromRange()
    }
    
    getNumbersFromRange(){
      for(let i = 0; i < this.range; i++){
        this.response.push(this.numbersArray[i])
      }
    }
  }
  
  class Calculate{
    result = 1
    
    constructor(numbers){
      this.numbers = numbers
    }
    
    operate(){}
    
    response(){
      return this.result
    }
  }
  
  class Sumar extends Calculate{
    operate(){
      this.numbers.forEach(num => {
        this.result += num
      })
    }
  }
  
  class Multiplicar extends Calculate{
    operate(){
      this.numbers.forEach(num => {
        this.result *= num
      })
    }
  }
  
  let numbers = new Numbers(3).response
  
  let multiply = new Multiplicar(numbers)
  multiply.operate()
  multiply.response()