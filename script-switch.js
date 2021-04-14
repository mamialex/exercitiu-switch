var nr1 = Number(prompt("give a number between 1 and 5"))

if (nr1 === 1) {
    console.log("you entered number 1")
}
else if (nr1 === 2) {
    console.log("you entered number 2")
}
else if (nr1 === 3) {
    console.log("you entered number 3")
}
else if (nr1 === 4) {
    console.log("you entered number 4")
}
else if (nr1 === 5) {
    console.log("you entered number 5")
}
else {
    console.log("you entered a wrong number!")
}

// folositor la drop down menu`1
switch(nr1) {
    case 1:{
        console.log("you entered number 1")
        break
    }
    case 2:{
        console.log("you entered number 2")
        break
    }
    case 3:{
        console.log("you entered number 3")
        break
    }
    default:{
        console.log("you entered a wrong number!")
    }
}