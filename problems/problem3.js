// Q3 Find all users with masters Degree.

function problem3(users) {
    for (let person in users) {
        const personDetail = users[person]
        if (personDetail.qualification == "Masters") {
            console.log(person);
        }
    }
}

module.exports = problem3;