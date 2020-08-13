using EasyBuilderAPI.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using EasyBuilderAPI.Data;
using System.Linq;
namespace EasyBuilderAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudioController : ControllerBase
    {
        private readonly ILogger<StudioController> _logger;
        public StudioController(ILogger<StudioController> logger)
        {
            _logger = logger;
        }
        [HttpPost]
        public async Task<JsonResult> Studio(){
            MemoryStream memory = new MemoryStream();
            await Request.Body.CopyToAsync(memory);
            memory.Position = 0;
            using (StreamReader reader = new StreamReader(memory)){
                string reqBody = reader.ReadToEnd();
                if(reqBody.Length > 0){
                    var obj = JsonConvert.DeserializeObject<Studio>(reqBody);
                    return new JsonResult(obj);
                }
            }
            return new JsonResult("Error");
            
        }
    }
}