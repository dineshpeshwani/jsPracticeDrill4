const employees = require('./questions');

const result = employees.reduce((acc, curr) => {

    if (curr["place"] == "Japan" || curr["place"] == "India") {
        if (acc["Asia"]) {
            acc["Asia"] = [...acc["Asia"], curr];
        } else {
            acc["Asia"] = [curr]
        }
    } else {
        if (acc["Europe"]) {
            acc["Europe"] = [...acc["Europe"], curr];

        } else {
            acc["Europe"] = [curr]
        }
    }
    return acc;
}, [])

console.log(result);