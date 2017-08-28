var EmployeeDetailsSpace;
(function (EmployeeDetailsSpace) {
    function employeeDetail(employee) {
        console.log("The Details of the Employee is: Name: " + employee.name + " , City:" + employee.city + ",state:" + employee.state);
    }
    EmployeeDetailsSpace.employeeDetail = employeeDetail;
})(EmployeeDetailsSpace || (EmployeeDetailsSpace = {}));
/// < reference path="interface1.ts" />
var EmployeeDetailsSpace;
(function (EmployeeDetailsSpace) {
    function jobDetail(job) {
        console.log(" The Job details are : Company " + job.company + " , \n     Salary " + job.salary);
    }
    EmployeeDetailsSpace.jobDetail = jobDetail;
    ;
})(EmployeeDetailsSpace || (EmployeeDetailsSpace = {}));
/// < reference path=interface.ts" />
var myEmployee = { name: "abc", city: "hyderabad", state: "Andhra Pradesh" };
EmployeeDetailsSpace.employeeDetail(myEmployee);
var detailJob = { company: "Accenture", salary: 60000 };
EmployeeDetailsSpace.jobDetail(detailJob);
