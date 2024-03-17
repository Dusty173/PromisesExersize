let baseURL = "http://numbersapi.com";
let favNum = 73;

// 1:
async function oneNumFact(){
    let data = await $.getJSON(`${baseURL}/${favNum}?json`);
    numfact = data.text
    $("#one-fact").append(`<li>${numfact}</li>`)
}
oneNumFact()

// 2:
let favNums = [23, 73, 173]
async function listNumsFacts(){
    let data = await $.getJSON(`${baseURL}/${favNums}?json`);
    let num1 = data[23]
   let num2 = data[73]
   let num3 = data[173]
   $('#list-facts').append(`<li>${num1}</li>`, 
                            `<li>${num2}</li>`,
                            `<li>${num3}</li>`);
}
listNumsFacts()

// 3:
async function fourFacts(){
    let facts = await Promise.all(
        Array.from({ length: 4}, () => {
            return $.getJSON(`${baseURL}/${favNum}?json`);
        })).then(facts => {
            facts.forEach(data => {
                $("#facts").append(`<li>${data.text}</li>`)
            })
    });
}
fourFacts()
