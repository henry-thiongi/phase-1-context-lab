/* Your Code Here */
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

const createEmployeeRecord = function(Record){
    return {
        firstName: Record[0],
        familyName: Record[1],
        title: Record[2],
        payPerHour: Record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(employeeRecord) {
    return employeeRecord.map(function(Record){
        return createEmployeeRecord(Record)
    })
}

const createTimeInEvent = function(Stamp){
    const [date, hour] = Stamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

const createTimeOutEvent = function(Stamp){
    const [date, hour] = Stamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

const hoursWorkedOnDate = function(Date){
    const inEvent = this.timeInEvents.find(function(e){
        return e.date === Date
    })

    const outEvent = this.timeOutEvents.find(function(e){
        return e.date === Date
    })

    return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = function(dateSought){
    const rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }

const calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}

