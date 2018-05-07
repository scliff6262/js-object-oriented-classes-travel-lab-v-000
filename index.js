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
      case horizontal.includes('1st Avenue'):
        numberValues["horizontal"] = 1
        break;
      case horizontal.includes('2nd Avenue'):
        numberValues["horizontal"] = 2
        break;
      case horizontal.includes('3rd Avenue'):
        numberValues["horizontal"] = 3
        break;
      case horizontal.includes('Lexington'):
        numberValues["horizontal"] = 4
    }
  }
  blocksTravelled()
}
