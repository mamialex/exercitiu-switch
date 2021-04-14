let nr1 = Number(prompt("Primul numar:"))
let nr2 = Number(prompt("al doilea numar:"))
let nr3 = Number(prompt("al treilea numar:"))
let operatie = prompt(`
        Alege 1 pentru adunarea numerelor
        Alege 2 pentru a vedea care numar este mai mare
        Alege 3 pentru a vedea valoare adunarii lui nr1 si nr3
        Alege 4 pentru a introduce numerele intr-un array si afisarea array-ului
`)
switch (operatie) {
  case 1: {
    suma = nr1 + nr2 + nr3
    console.log("Suma numerelor este: " + suma)
    break
  }
  default: {
    console.log("Da refresh la pagina si incearca din nou!")
  }
}
