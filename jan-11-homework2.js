const LEAGUE_NAME = 'ENGLISH PRIMIER LEAGUE'
let Champion;

const club= {
    name: 'Arsenal FC',
    year: 1886,
    owner: 'Stan Kroenke',
    manager: "Mikel Arteta",
    
    'total players': {
        firstTeam: 23,
        reserveTeam: 20,
        youthTeam: 22
    } 
}
console.log(club['total players'])
// adding to Object
club.stadium = 'Emirates';

// deleting from Object
delete club["total players"]['youthTeam'];
console.log(club)

const vehicle = {
    brandName: 'Subaru',
    model: 'Forester',
}
console.log(vehicle)

// changing value of model
vehicle.model = "Outback"
console.log(vehicle)

delete vehicle.model
console.log(vehicle)

const salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}
//calculating total values in object salaries
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);