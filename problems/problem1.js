// Q1 Find all users who are interested in playing video games.

function problem1(users) {
    for (let person in users) {
        let personDetail = users[person]
        console.log(person);
        const interest = personDetail.interests[0].split(',');

        for (let i = 0; i < interest.length; i++) {
            if (interest[i].trim() == "Playing Video Games") {
                return person;
            }
        }
    }
}

module.exports = problem1;