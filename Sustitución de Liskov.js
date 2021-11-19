class patoGoma{
    chillar(){
      console.log('Chillar')
    }
  }
  
  class patoReal{
    comer(){
      console.log('Comiendo..')
    }
    
    parpar(){
      console.log('Ckuag!!')
    }
  }
  
  class Pato extends patoReal{}
  class PatoToy extends patoGoma{}
  
  patoReal = new Pato()
  patoReal.comer()
  patoReal.parpar()
  
  juguete = new PatoToy()
  juguete.chillar()