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
    public class EmployesController : ControllerBase
    {

        [HttpGet("GetEmp")]
        public List<Employes> GetEmp()
        {
            AddRepo sb = new AddRepo();

            return (sb.GetEmp());
        }

        [HttpPost("AddEmployes")]
        public Boolean AddEmployes(Employes emp)
        {
            AddRepo sb = new AddRepo();

            return (sb.AddEmp(emp));
        }
    }

}