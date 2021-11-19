
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
    result = 0
    
    constructor(range){
      this.numbers = new Numbers(range).response
    }
    
    sum(){
      this.numbers.forEach(num => {
        this.result += num
      })
    }
    
    response(){
      return this.result
    }
  }
  
  let sumar = new Calculate(3)
  sumar.sum()
  sumar.response()