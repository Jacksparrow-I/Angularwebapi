using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Cors;
using System.Data.SqlClient;
using angularwebapi.Models;
using angularwebapi.Repository;
using Microsoft.AspNetCore.Mvc;

namespace angularwebapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowMyOrigin")]
    public class EmployesController : ControllerBase
    {

        [HttpGet("GetEmp")]
        public List<Employes> GetEmp()
        {
            AddRepo sb = new AddRepo();

            return (sb.GetEmp());
        }


        
        [HttpPost("AddEmployes")]
        public string AddEmployes([FromBody]Employes emp)
        {
            AddRepo sb = new AddRepo();

            return (sb.AddEmp(emp));
        }

        [HttpPost("UpdateEmployes")]
        public bool UpdateEmployes([FromBody]Employes emp)
        {
            AddRepo sb = new AddRepo();

            return (sb.UpdateEmp(emp));
        }

        [HttpPost("DeleteEmployes")]
        public bool DeleteEmployes([FromBody]Employes emp)
        {
            AddRepo sb = new AddRepo();

            return (sb.DeleteEmp(emp.Id));
        }
    }

}