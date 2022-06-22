randomNumber1 = Math.floor(Math.random() * 6 + 1)
randomNumber2 = Math.floor(Math.random() * 6 + 1)


document.getElementById("img1").src = "/images/dice"+randomNumber1+".png"
document.getElementById("img2").src = "/images/dice"+randomNumber2+".png"

if (randomNumber1>randomNumber2){
    console.log(document.querySelector("h1").textContent = "Player 1 Win ")
}
else if(randomNumber1<randomNumber2){
    console.log(document.querySelector("h1").textContent = "Player 2 Win ")

}
else{
    console.log(document.querySelector("h1").textContent = "Draw")

}
