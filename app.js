const input = document.querySelector("#input")
const input2 = document.querySelector("#input2")
const btn = document.querySelector("button")
const img = document.querySelector("#img");
const javob = document.querySelectorAll("#hisob")


function changeColor(){
    let ogirlik = input.value;
    let boy = input2.value;
    let bmi =((ogirlik/(boy*boy))).toFixed(1);
    console.log(bmi)
    if(bmi < 18.5){
        img.setAttribute("src", "./imgs/thin.png");
        hisob.innerHTML = "Siz ozg'insiz"
    }
    else if (bmi < 25){
        img.setAttribute("src", "./imgs/normal.png");
        hisob.innerHTML = "Siz normalsiz"
    }
    else if (bmi < 30){
        img.setAttribute("src", "./imgs/fat.png");
        hisob.innerHTML = "Siz semissiz"
    }
    else if(bmi > 30){
        img.setAttribute("src", "./imgs/fat.webp" );
        hisob.innerHTML = "Siz juda semissiz"
    }
    else  {
        hisob.innerHTML = "Iltimos vazningiz hamda bo'yingizni kiriting!"
    }
    img.style.width = "500px";
    img.style.height = "550px";
    img.style.paddingLeft = "30px";

    console.log(bmi);
}

document.querySelector('form').addEventListener('submit' , (e)=>{
     e.preventDefault()    
     changeColor()
})


// const btn = document.querySelector('#btn')
// const input = document.querySelector('#boy')
// const input2 = document.querySelector('#vazn')

// function changeColor(){
//     console.log(input.value);    
//     let ogirlik = input.value
//     let boy = input2.value
//     let bmi =((ogirlik/ (boy*boy))).toFixed(1)
//     if(bmi < 18.5){
//     const h1 = document.querySelector(".imges")    
//     h1.setAttribute( "src" , "./img/normal.jpg")   
//     const hi = document.querySelector("#hi2")
//     hi2.innerHTML = "siz og'irsiz"
   
    
// }
// else if(bmi > 18.5 && bmi < 25){
//     const h1 = document.querySelector(".imges")    
//     const hi = document.querySelector("#hi")
//     h1.setAttribute( "src" , "./img/normal.jpg")
//     hi.innerHTML = "siz normalsiz"
    
// }
// else if(bmi > 25 && bmi < 30){
//     const h1 = document.querySelector(".imges")    
//     const hi = document.querySelector("#hi3")
//     h1.setAttribute( "src" , "./img/normal.jpg")
//     hi3.innerHTML = "siz semiz siz"
// }
// else {
//     const h1 = document.querySelector(".imges")    
//     const hi = document.querySelector("#hi4")
//     h1.setAttribute( "src" , "./img/normal.jpg")
//     hi4.innerHTML = "siz o'ta semiz siz"
// } 
// }
// document.querySelector('form').addEventListener('submit' , (e)=>{
//      e.preventDefault()    
//      changeColor()
// })