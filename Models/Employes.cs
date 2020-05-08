using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace angularwebapi.Models
{

    public class Employee
    {
        public string EmployeeName { get; set; }
    }
    public class Employes
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        public int EmployeeCode { get; set; }
        [Required]
        public string Gender { get; set; }
        public int Designation { get; set; }
        public string DesignationName { get; set; }
        public int Department { get; set; }
        public string DepartmentName { get; set; }
        [Required]
        public string DOB { get; set; }
        [Required]
        public int Salary { get; set; }


    }
}

