let baseURL = "http://numbersapi.com";
let favNum = 73;

$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    numfact = data.text
    $("#one-fact").append(`<li>${numfact}</li>`)
})


let favNum2 = [23,73,173]
$.getJSON(`${baseURL}/${favNum2}?json`).then(data => {
    let num1 = data[23]
    let num2 = data[73]
    let num3 = data[173]
    $('#list-facts').append(`<li>${num1}</li>`, 
                            `<li>${num2}</li>`,
                            `<li>${num3}</li>`);
});

Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNum}?json`);
    })).then(facts => {
        facts.forEach(data => {
            $("#facts").append(`<li>${data.text}</li>`)
        })
});