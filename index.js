// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock){
    if (pickUpBlock <= 42) {
        return 42 - pickUpBlock;
    } else {
        return pickUpBlock - 42;
    }
}

function distanceFromHqInFeet(pickUpBlock){
    return (distanceFromHqInBlocks(pickUpBlock) * 264);
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    const traveled = distanceTravelledInFeet(start, destination);
    if(traveled <= 400) {
        return 0;
    } else if(traveled <= 2000) {
        return (traveled - 400) * .02;
    } else if(traveled <= 2500){
        return 25;
    } else {
        return "cannot travel that far";
    }
}