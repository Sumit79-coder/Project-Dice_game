// let randomNumber1 = Math.floor(Math.random() * 7)

// document.getElementById("imag1").src = "../images/dice+ 'randomNumber' +.png";

// console.log(randomNumber1)
randomNumber1 = Math.floor(Math.random() * 6 + 1)
randomNumber2 = Math.floor(Math.random() * 6 + 1)

num = console.log(randomNumber1)
num = console.log(randomNumber2)

// console.log(document.getElementsByClassName("img1").setAttribute('/images/dice+"num"+.png'))
console.log(document.getElementById("img1").src = "/images/dice"+randomNumber1+".png")
console.log(document.getElementById("img2").src = "/images/dice"+randomNumber2+".png")

if (randomNumber1>randomNumber2){
    console.log(document.querySelector("h1").textContent = "Player 1 Win ")
}
else if(randomNumber1<randomNumber2){
    console.log(document.querySelector("h1").textContent = "Player 2 Win ")

}
else{
    console.log(document.querySelector("h1").textContent = "Draw")

}


