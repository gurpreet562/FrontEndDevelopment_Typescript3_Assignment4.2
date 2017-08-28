/// < reference path=interface.ts" />

  let myEmployee:EmployeeDetailsSpace.Employee = { name: "abc", city:"hyderabad", state:"Andhra Pradesh"}
  EmployeeDetailsSpace.employeeDetail(myEmployee);

  let detailJob:EmployeeDetailsSpace.Job={company:"Accenture",salary: 60000}
  EmployeeDetailsSpace.jobDetail(detailJob);