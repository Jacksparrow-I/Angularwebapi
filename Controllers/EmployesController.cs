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
        public int AddEmployes([FromBody]Employes emp)
        {
            AddRepo sb = new AddRepo();

            return (sb.AddEmp(emp));
        }

        //[HttpPost("AddEmployes")]
        //public string AddEmployes([FromBody]Employee emp)
        //{
        //    //   AddRepo sb = new AddRepo();

        //    // return (sb.AddEmp(emp));

        //    return "hi";
        //}

        [HttpPost("UpdateEmployes")]
        public bool UpdateEmployes([FromBody]Employes emp)
        {
            AddRepo sb = new AddRepo();

            return (sb.UpdateEmp(emp));
        }


        [HttpDelete("DeleteEmployes/{Id}")]
        public bool DeleteEmployes(int Id)
        {
            AddRepo sb = new AddRepo();

            return (sb.DeleteEmp(Id));
        }
    }

}