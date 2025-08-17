// for (starting value ; condition; increment/decrement)

// for(let i=50;i >= 1 ; i--) {
//     console.log(i);

// }

// for(let i=2; i <= 100; i+=2) {
//     console.log(i);
// //     showAnswer.inner.HTML = i

// // }

// for(let i=1; i <= 100; i++) {
//     if (i%2 == 0){
//         console.log(`${i} is an even number`);
//         show.innerHTML += `<h2  style="color:red;"> ${i} is an even number</h2>`
// }
// else{
//     console.log(`${i} is an odd number`);
//     show.innerHTML += `<h3 style = "color:blue;"> ${i} is an odd number</h3>`
// }
// }

// for (i=1; i<=5; i++) {
//     for(j=1; j<=10; j++) {
//         // console.log(i,j);
//         // console.log(j);

//         console.log(`${i} * ${j} = ${i*j}`)
//         // let word = (i*j);
//         // Text.innerHTML = word;
//     }
// }

function evaluationSite() {
  const proValue1 =+ value1.value;
  const proValue2 =+ value2.value;
  const operator = number.value;
  product.innerHTML = "";

  for (i = 1; i <= proValue1; i++) {
    let div1 = document.createElement("div");

    for (j = 1; j <= proValue2; j++) {
      let h1 = document.createElement("p");

if (proValue1 === "" && proValue2 === "" && operator === "") {
        alert("Please enter a value in the input field")
      }
      // if(operator === ""){
      //   alert("select an operation")
      // }

    else if (operator == "multiply") {
        result = `${i}*${j}&nbsp;=&nbsp;${i * j} `;
      }   else if (operator == "division") {
        result = `${i}/${j}&nbsp;=&nbsp;${(i / j).toFixed(2)}`;
      } else if (operator == "addition") {
        result = `${i}+${j}&nbsp;=&nbsp;${i + j}`;
      } else if (operator == "subtract") {  
        result = `${i}-${j}&nbsp;=&nbsp;${i - j}`;
      }
      else{
        alert("select an operation");
      }

      h1.innerHTML = result;
      h1.style.padding = "0px 10px";
      div1.appendChild(h1);
    }

    product.appendChild(div1);
    div1.style.backgroundColor="blue"  ; 
    div1.style.borderRadius="10px"  ; 
    div1.style.margin="7px"  ; 
    div1.style.padding="7px"  ; 
    div1.style.border="3px solid yellow" ; 
    div1.style.marginBottom="15px" ; 
  }
}

// function additionSite(){
//     const proValue1 = value1.value
//     const proValue2 = value2.value
//     product.innerHTML = "";
//     for (i=1; i<=proValue1;  i++) {

//         let div = document.createElement("div")
//         for(j=1; j<=proValue2; j++) {
//             let p = document.createElement("p")

//             p.innerHTML = `${i}+${j}&nbsp;=&nbsp;${i+j}`
//             p.style.padding = "0px 10px"
//             div.className = ""
//             div.appendChild(p)
//         }

//         let gotten = document.getElementById("product").appendChild(div)
//         gotten.style.backgroundColor = "yellow"
//     }
// }

// function divisionSite(){
//     const proValue1 = value1.value
//     const proValue2 = value2.value
//     product.innerHTML = "";
//     for (i=1; i<=proValue1;  i++) {

//         let div = document.createElement("div")
//         for(j=1; j<=proValue2; j++) {
//             let p = document.createElement("p")
//             p.innerHTML = `${i}/${j}&nbsp;=&nbsp;${(i/j).toFixed(2)}`;
//             p.style.padding = "0px 10px"
//             div.className = ""
//             div.appendChild(p)
//         }

//         let gotten = document.getElementById("product").appendChild(div)
//         gotten.style.backgroundColor = "yellow"
//     }
// }

// function subtractionSite(){
//     const proValue1 = value1.value
//     const proValue2 = value2.value
//     product.innerHTML = "";
//     for (i=1; i<=proValue1;  i++) {

//         let div = document.createElement("div")
//         for(j=1; j<=proValue2; j++) {
//             let p = document.createElement("p")
//             p.innerHTML = `${i}-${j}&nbsp;=&nbsp;${i-j}`;
//             p.style.padding = "0px 20px"
//             div.className = ""
//             div.appendChild(p)
//         }

//         let gotten = document.getElementById("product").appendChild(div)
//         gotten.style.backgroundColor = "yellow"
//     }
// }
//  var options = () => {
//     let showOptions = document.getElementById('menu')
//     showOptions.classList.toggle('menu')
//  }

