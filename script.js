const services = [
    {
        "service": "Wash Car",
        "price": 10
    }, {
        "service": "Mow Lawn",
        "price": 20
    }, {
        "service": "Pull Weeds",
        "price": 30
    }
]

const button1 = document.getElementById('btn1-el');
const button2 = document.getElementById('btn2-el');
const button3 = document.getElementById('btn3-el');
let requiredService = [];

button1.addEventListener('click', function(){
    requiredService.push(services[0])
    console.log(requiredService)
})

button2.addEventListener('click', function(){
    requiredService.push(services[1])
    console.log(requiredService)
    
})

button3.addEventListener('click', function(){
    requiredService.push(services[2])
    console.log(requiredService)
})




/* const buttons = document.querySelectorAll('.btn-el');
let requiredService = [];


buttons.forEach(function(button) {
    button.addEventListener('click', function() {

    })

}) */
/* for (const button of buttons) {
    button.addEventListener('click', function(){
        for (let i = 0; i < buttons.length; i++) {
            console.log(services[i])
        }
    })
} 
 */


/* buttons.addEventListener('click', function(){
    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i])
    }
    
})
 */



/* const btnEl = document.getElementById("btn-el");
let requiredService = []
btnEl.addEventListener("click", function(){
    requiredService.push(services[1])
    console.log(requiredService)
})
 */



// check on query selectorall... its output once you click on one


