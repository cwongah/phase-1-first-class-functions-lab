const returnFirstTwoDrivers = function(drivers){
        return drivers.slice(0,2)
    }

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
   return function theMultplier(fare){
        return fare * multiplier
    }
}

fareDoubler = function(fare){
    return fare * 2
}

fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, fn){
    if(fn === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }
    else if(fn === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }  
}