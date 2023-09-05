function getDays(date1, date2) {

    let timeDifference = date2.getTime() - date1.getTime();

    let dayDifference = timeDifference / (1000 * 3600 * 24);

    console.log(dayDifference);
    
    return dayDifference; 
}

getDays(
new Date("June 14, 2019"),
new Date("June 20, 2019")
)   

getDays(
new Date("December 29, 2018"),
new Date("January 1, 2019")
)
      
getDays(
new Date("July 20, 2019"),
new Date("July 30, 2019")
)