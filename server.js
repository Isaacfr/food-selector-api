const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8000;

const restaurants = {
    'rooftop noodles' : {
        'foodType': "Vietnamese",
        'rating': 4.5,
        'hours': "11 am - 10pm"
    },
    
    'bold burgers' : { 
        'foodType': "Casual Burger Chain",
        'rating': 4.2,
        'hours': '11 am - 1am'
    },

    'unknown' : {
        'foodType': 'unknown',
        'rating': 'unknown',
        'hours': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name',(request, response) =>{
    const restName = request.params.name.toLowerCase();
    if(restaurants[restName]){
        response.json(restaurants[restName]);
    }
    else{
        response.json('unknown');
    }
});

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`);
});