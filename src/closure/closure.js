//haremos una alcancía para entender el closure

const moneyBox = (coins) =>{
    var saveCoins = 0
    
    saveCoins += coins

    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5) // $5
moneyBox(10) // $10
//este código no recuerda cuántas monedas tenía
// es una pésima alcancía, esto no es un closure


//veamos una mejor aproximación
const moneyBox = () =>{
    var saveCoins = 0
    const countCoins = (coins) =>{
        //hacemos una func dentro de la otra func
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox() //iniciamos la función
//y la usamos

myMoneyBox(4) //$4
myMoneyBox(10) //$14
myMoneyBox() //$NaN
myMoneyBox(2) //$NaN