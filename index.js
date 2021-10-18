const cities = [
    {name: 'Sydney', population: 3502021},
    {name: 'Brisbane', population: 817000},
    {name: 'Melbourne', population: 200000},
    {name: 'Perth', population: 2006751},
    {name: 'Hobart', population: 1226000}
];


// Array filter() in a function shown below
let megaCities = cities.filter(function (answer) {
    return answer.population > 3000000;
});
console.log(megaCities);