const employees = require('./questions');

const result = employees.reduce((acc, curr) => {

    if (curr["place"] == "Germany" && curr["department"] == "Computer Science") {
        if (acc["Germany_CS"]) {
            acc["Germany_CS"] = [...acc["Germany_CS"], curr];
        } else {
            acc["Germany_CS"] = [curr]
        }
    } 
    return acc;
}, [])


console.log(result);