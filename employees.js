const is_absent =0;
// let emp_check = Math.floor(Math.random)*10 %2;
// if(emp_check == is_absent){
//     console.log("Employee is absent");
// }
// else{
//     console.log("Employee is present")
// }

const is_part_time =1;
const is_full_time = 2;

const part_time_hours = 4;
const full_time_hours = 8;
const wages_per_hour = 20;

function getWorkingHours(emp_check){
    switch(emp_check){
        case is_part_time:
            return part_time_hours;
            break;
        case is_full_time:
            return full_time_hours;
            break;
        default:
            return 0;
    }
}
let emp_check = Math.floor(Math.random() *10) % 3;
let empHrs = getWorkingHours(emp_check);
let empWages = empHrs * wages_per_hour;
console.log(empWages);