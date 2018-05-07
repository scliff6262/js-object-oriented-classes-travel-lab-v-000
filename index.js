class Driver {
  constructor(name, date){
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year){
    return Math.abs(year - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  convertToNumbers(horizontal, vertical){
    let numberValues = {}
    switch(horizontal){
      case horizontal.includes('1st'):
        numberValues["horizontal"] = 1
        break;
      case horizontal.includes('2nd'):
        numberValues["horizontal"] = 2
        break;
      case horizontal.includes('3rd'):
        numberValues["horizontal"] = 3
        break;
      case horizontal.includes('Lexington'):
        break;
        numberValues["horizontal"] = 4
      case horizontal.includes('Park'):
        break;
        numberValues["horizontal"] = 5
      case horizontal.includes('Madison'):
        break;
        numberValues["horizontal"] = 6
      case horizontal.includes('5th'):
        break;
        numberValues["horizontal"] = 7
    }
  }
  blocksTravelled()
}
