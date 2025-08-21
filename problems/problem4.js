// Q4 Group users based on their Programming language mentioned in their designation.

function problem4(users) {
    const desginationsAndUsers = {};
    for (let person in users) {
        const personDetail = users[person];
        const desgination = personDetail.desgination;
        if (!(desginationsAndUsers[desgination])) {
            desginationsAndUsers[desgination] = [];
        }
        desginationsAndUsers[desgination].push(person);
    }
    return desginationsAndUsers;
}

module.exports = problem4;