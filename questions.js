const Employess = [
    { id: 232343, name: "P. T  Ruud", department: "Computer Science", place: "Germany"},
    { id: 232139, name: "Charles Xavier", department: "Mathematics", place: "Germany"},
    { id: 239922, name: "M. S Styris", department: "Computer Science", place: "France"},
    { id: 232348, name: "Mark Cook", department: "Philosophy", place: "Germany"},
    { id: 232888, name: "Howard Pack", department: "Computer Science", place: "France"},
    { id: 232288, name: "Travis Lei", department: "Computer Science", place: "India"},
    { id: 283920, name: "Silver Stone", department: "Philosophy", place: "India"},
    { id: 732873, name: "Carlton Baugh", department: "Mathematics", place: "Austria"},
    { id: 732343, name: "Jade Lee", department: "English", place: "Japan"},
    { id: 742343, name: "Xavi Herrera", department: "English", place: "Spain"}

]
module.exports = Employess;

/*
    Q.1     Group employees by department in the given order (computer science, english, maths, philosophy)
    Q.2     Group employees by place (Europe or Asia)
    Q.3     Group employees by departments [enginneering { computer science + mathematics }, linguistic { philosophy + english }]
    Q.4     Filter employees from Germany and are from deparment Computer Science
    Q.5     Restructure data
            {
                232343: {
                        P. T  Ruud: {
                            Computer Science: "Germany"
                        }
                    },
                    ...
                    ...

            }

*/