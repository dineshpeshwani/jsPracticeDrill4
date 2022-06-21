const employees = require('./questions');

const result = employees.reduce((acc, curr) => {
   if(acc[curr.department]){
    acc[curr.department] = [...acc[curr.department], curr.name];
   }else{
    acc[curr.department] = [curr.name]
   }
    return acc;
}, [])

console.log(result);