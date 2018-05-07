class Driver {
  constructor(name, date){
    this.name = name
    this.date = date
  }

  startDate(){
    return Date.parse(this.date)
  }
}
