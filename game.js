var game = prompt("¿Cuál será su jugada?")
game.toLowerCase()

function randomNum(){
    var jugada = Math.floor(Math.random()*3)
    var mach
    if (jugada==2){
        mach = "rock"
    }else if (jugada ==1){
        mach = "paper"
    }else{
        mach = "scissor"
    }
    return mach
}

var jugada = randomNum()
let loss = "Haz perdido"
let win = "Haz ganado"
let tie = "Es un empate"
alert(jugada)

switch (jugada){
    case "rock":
        switch (game){
            case "rock":
                alert(tie)
                break
            case "paper":
                alert(win)
                break;
            case "scissor":
                alert(loss)
                break;
        }
        break;
    case "paper":
        switch (game){
            case "rock":
                alert(loss)
                break
            case "paper":
                alert(tie)
                break;
            case "scissor":
                alert(win)
                break;
        }
        break;
    case "scissor":
        switch(game){
            case "rock":
                alert(win)
                break
            case "paper":
                alert(loss)
                break;
            case "scissor":
                alert(tie)
                break;
        }
        break;
}