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
  constructor(beginningLocation, endingLocation)
}
