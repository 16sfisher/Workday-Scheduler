$(document).ready(function () {

    // test flag
    const test = false;

    // get times from moment
    const now = moment().format('MMMM Do YYYY');

    // commented out for test in non-standard hours
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');



    // set times for tesitng after hours
    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    let dateHeading = $('#currentDay');
    dateHeading.text(now);

    
});