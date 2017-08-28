/// < reference path="interface1.ts" />

namespace EmployeeDetailsSpace {
  export function jobDetail(job: EmployeeDetailsSpace.Job) {
    console.log(` The Job details are : Company: ${job.company} , 
     Salary: ${job.salary}`);
  };
}




