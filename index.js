class Driver {
  constructor(name, date){
    this.name = name
    this.startDate = new Date(this.date)
  }

  yearsExperienceFromBeginningOf(year){
    return Math.abs(year - this.startDate)
  }
}
