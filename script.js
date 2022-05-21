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

const btnEl = document.getElementById("btn-el");
let requiredService = []
btnEl.addEventListener("click", function(){
    requiredService.push(services[1])
    console.log(requiredService)
})


// check on query selectorall... its output once you click on one


