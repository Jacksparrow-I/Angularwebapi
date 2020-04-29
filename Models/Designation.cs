using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace angularwebapi.Models
{
    public class Designation
    {
        [Key]
        public int DesignationId { get; set; }
        [Required]
        public string DesignationName { get; set; }
    }
}
