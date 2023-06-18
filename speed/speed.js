function calculateSpeedDemerits(speed){
    const speedLimit = 70;
    const kmPerDemeritPoints = 5;
    const maxDemeritPoints = 12;
// check if speed is within the allowed limit
if(speed <= speedLimit){
    console.log("OK")
}
else {
    //calculate demerits points
    const demeritPoints = speed - speedLimit/kmPerDemeritPoints; 
    // check if the demerit point exceed the maximum allowed
    if( demeritPoints > maxDemeritPoints){
        console.log(`License suspended`)
    }
    else{
        console.log(`Points:`,demeritPoints)
    }
}
}
//prompt the user for speed input
const speedInput=prompt(`Enter the speed of the car in km/h:`);
//parseInt to display the user input
const speed = parseInt(speedInput);
//call function with user input
calculateSpeedDemerits(speed)
