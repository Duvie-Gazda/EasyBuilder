using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using System.Text.Json;
namespace EasyBuilderAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EasyController : ControllerBase
    {
        private readonly ILogger<EasyController> _logger;

        public EasyController(ILogger<EasyController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public JsonResult Get(string id,string name,double price){
            if(id == null && name == null && price == 0){
                return new JsonResult(new EasyTest());
            }
            else{
                var obj = new EasyTest{ 
                    id = id,
                    name = name,
                    price = price
                };
                return new JsonResult(obj);
            }

        }
    }
}