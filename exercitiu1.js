let nr1 = Number(prompt("enter first numbwer:"))
let operation = prompt("enter operation:")
let nr2 = Number(prompt("Enter second number:"))

switch(operation) {
    case "+":{
        (suma=nr1+nr2)
        console.log("Suma numerelor este: "+suma)
        break
    }
    case "-":{
        (diferenta=nr1-nr2)
        console.log("Diferenta numerelor este: "+diferenta)
        break
    }
    case "*":{
        (inmultire=nr1*nr2)
        console.log("Rezultatul inmultirii numerelor date este: "+inmultire)
        break
    }
    case "/":{
        (impartire=nr1/nr2)
        console.log("Rezultatul impartirii numerelor date este: "+impartire )
        break
    }
    default:{
        console.log("Da refresh la pagina si incearca din nou!")
    }
}