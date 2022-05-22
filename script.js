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
const removeItem = document.getElementsByClassName('removeItem');
let content = document.querySelector('.content')
let requiredService = [];

button1.addEventListener('click', function(){
    requiredService.push(services[0])
    displayService() 
    this.disabled = true;
})

button2.addEventListener('click', function(){
    requiredService.push(services[1])
    displayService() 
    this.disabled = true;  
})

button3.addEventListener('click', function(){
    requiredService.push(services[2])
    displayService() 
    this.disabled = true;
})

function displayService() {
    let serviceList = " ";
    for (let i = 0; i < requiredService.length; i++) {
        serviceList += `
                <div>
                    <div class="contentDisplay">
                        <h2>${requiredService[i].service}</h2>
                        <small class="removeItem">Remove</small>
                    </div>
                    <h2><span>$</span>${requiredService[i].price}</h2>
                </div>
         
         `
    }

    content.innerHTML = serviceList
}

function total() {
    let total = " ";
    
}


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


