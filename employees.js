const is_absent =0;
let emp_check = Math.floor(Math.random)*10 %2;
if(emp_check == is_absent){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present")
}

const is_part_time =1;
const is_full_time = 2;

const part_time_hours = 4;
const full_time_hours = 8;
const wages_per_hour = 20;

emp_check = Math.floor(Math.random()*10) % 3;
switch(emp_check){
    case is_part_time:
        empHrs = part_time_hours;
        break;
    case is_full_time:
        empHrs = full_time_hours;
        break;
    default:
        empHrs = 0;    
}
let empWage = empHrs * wages_per_hour;
console.log(empWage);