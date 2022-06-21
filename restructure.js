const employees = require('./questions')

const result = employees.reduce((acc, curr) => {

    acc[curr.id] = {
        [curr.name]:{
            [curr.department]:curr.place
        }
    }
    return acc;
    console.log(acc);
}, {})

console.log(result);

