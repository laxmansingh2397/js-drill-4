// Q2 Find all users staying in Germany.

function problem2(users) {
    for (let person in users) {
        const personDetail = users[person];
        if (personDetail.nationality == "Germany") {
            console.log(person);
        }
    }
}

module.exports = problem2;