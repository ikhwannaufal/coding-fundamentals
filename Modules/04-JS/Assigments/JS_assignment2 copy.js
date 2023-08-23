function calculateAge(date) {

    const currentDate = new Date();

    let currentYear = currentDate.getFullYear();

    let currentMonth = currentDate.getMonth() + 1;

    let currentDay = currentDate.getDate();

    const userBirthDate = date.split("/");

    const [userDay, userMonth, userYear] = userBirthDate;

    let age = currentYear - userYear

    if (userYear > currentYear || userMonth > 12 || userDay > 31) {
        return false;
    }

    if (userMonth > currentMonth) {
        age = age - 1;
    }
    if (userMonth === currentMonth) {
        if (userDay > currentDay) {
            age = age - 1;
        }
    }
    return age;
}

console.log(calculateAge("6/6/1997"))
console.log(calculateAge("19/10/2002"))
console.log(calculateAge("10/8/2010"))
console.log(calculateAge("1/14/1979"))
console.log(calculateAge("45/2/1989"))
