const employees = require('./questions');

const result = employees.reduce((acc, curr) => {

    if (curr["department"] == "Computer Science" || curr["department"] == "Mathematics") {
        if (acc["Engineering"]) {
            acc["Engineering"] = [...acc["Engineering"], curr];
        } else {
            acc["Engineering"] = [curr]
        }
    } else {
        if (acc["linguistic"]) {
            acc["linguistic"] = [...acc["linguistic"], curr];

        } else {
            acc["linguistic"] = [curr]
        }
    }
    return acc;
}, {})

console.log(result);