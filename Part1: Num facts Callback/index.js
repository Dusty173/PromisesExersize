let baseURL = "http://numbersapi.com";
let favNum =73;

$.getJSON(`${baseURL}/${favNum}?json`, function(data){
    numfact = data.text
    $("#one-fact").append(`<li>${numfact}</li>`)
});




let favNum2 = [23,73,173]

$.getJSON(`${baseURL}/${favNum2}?json`, function(data){
   let num1 = data[23]
   let num2 = data[73]
   let num3 = data[173]
   $('#list-facts').append(`<li>${num1}</li>`, 
                            `<li>${num2}</li>`,
                            `<li>${num3}</li>`);
});
// Only hard coded this for this project, I know its better to make it
// more flexible!



let facts = [];

$.get(`${baseURL}/${favNum}?json`, function(data){
    facts.push(data.text);
    $.get(`${baseURL}/${favNum}?json`, function(data){
        facts.push(data.text);
        $.get(`${baseURL}/${favNum}?json`, function(data){
            facts.push(data.text);
            $.get(`${baseURL}/${favNum}?json`, function(data){
                facts.push(data.text);
                facts.forEach(fact => {
                    $("#facts").append(`<li>${fact}</li>`)
                })
            });
        });
    });
});


