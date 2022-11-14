const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

// const family = {
//     'FamilyName': 'Rao',
//     'FamilyCaste' : 'Rajput',
//     'FamilyMembers': 16
// }

const players = {
    "rank1":{
        "first":"Rafael","last":"Nadal","points":9585},

    "rank2":{
        "first":"Novak","last":"Djokovic","points":8945},
    
    "rank3":{
        "first":"Roger","last":"Federer","points":6190},

    "rank4":{
        "first":"Daniil","last":"Medvedev","points":5705},

   "rank5":{
        "first":"Dominic","last":"Thiem","points":5025},
    
     "rank6":{
    "first":"Stefanos","last":"Tsitsipas","points":4000},
   
    "rank7":{
    "first":"Alexander","last":"Zverev","points":2945},
   
    "rank8":{
    "first":"Matteo","last":"Berrettini","points":2670},
   
    "rank9":{
        "first":"Roberto Bautista","last":"Agut","points":2540},
   
    "rank10":{
        "first":"Gael","last":"Monfils","points":2530},
   
        "rank11":{
    "first":"David","last":"Goffin","points":2335}
}

app.use(express.static(path.join(__dirname, "js")));

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:playerName', (request, response)=>{
    let topper = request.params.playerName.toLowerCase();
    console.log(topper)
    if(players[topper]){
        console.log(response.json(players[topper]));
    }else{
        response.json('No player found by this name.');
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})