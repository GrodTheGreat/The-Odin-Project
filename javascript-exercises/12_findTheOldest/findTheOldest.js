const findTheOldest = function(people) {
    return people.reduce((max, item) => {
        if (!max) return item;
        const maxAge = getAge(max);
        const age = getAge(item);

        return (age > maxAge) ? item : max;
    });
};

function getAge(person) {
    if (!person.yearOfDeath) return new Date().getFullYear() - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
