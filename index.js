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

  convertToNumbers(obj){
    let numberValues = {}
    switch(obj.horizontal){
      case '1st Avenue':
        numberValues["horizontal"] = 1
        break;
      case '2nd Avenue':
        numberValues["horizontal"] = 2
        break;
      case obj.horizontal.includes('3rd'):
        numberValues["horizontal"] = 3
        break;
      case obj.horizontal.includes('Lexington'):
        numberValues["horizontal"] = 4
        break;
      case obj.horizontal.includes('Park'):
        numberValues["horizontal"] = 5
        break;
      case obj.horizontal.includes('Madison'):
        numberValues["horizontal"] = 6
        break;
      case obj.horizontal.includes('5th'):
        numberValues["horizontal"] = 7
        break;
    }
    numberValues["vertical"] = parseInt(obj.vertical)
    return numberValues
  }

  blocksTravelled()
}
