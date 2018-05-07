class Driver {
  constructor(name, date){
    this.name = name
    this.date = date
  }

  startDate(){
    return IPOdate.setTime(Date.parse(this.date))
  }
}
