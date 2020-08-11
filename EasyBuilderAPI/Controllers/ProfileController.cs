using EasyBuilderAPI.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using Newtonsoft.Json;
using EasyBuilderAPI.Data;
using System.Linq;
namespace EasyBuilderAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
        class ProfileResult
        {
            public int? ErrorCode { get; set; }
            public int? SuccessCode { get; set; }
        }
        private readonly ILogger<ProfileController> _logger;
        public ProfileController(ILogger<ProfileController> logger)
        {
            _logger = logger;
        }
        [HttpPost]
        public async Task<JsonResult> Post()
        {
            MemoryStream stream = new MemoryStream();
            await Request.Body.CopyToAsync(stream);
            stream.Position = 0;
            using (StreamReader reader = new StreamReader(stream))
            {
                string requestBody = reader.ReadToEnd();
                if (requestBody.Length > 0)
                {
                    var obj = JsonConvert.DeserializeObject<Profile>(requestBody);
                    using (var context = new ApplicationDbContext())
                    {
                        var email = context.Profiles.Where(e => e.Email == obj.Email);
                        if (email.Count() == 0)
                        {
                            context.Add(obj);
                            context.SaveChanges();
                            return new JsonResult(new ProfileResult
                            {
                                SuccessCode = 2020
                            });
                        }
                        else
                        {
                            return new JsonResult(new ProfileResult
                            {
                                ErrorCode = 8080
                            });
                        }

                    }
                }
                else
                {
                    return new JsonResult(new ProfileResult
                    {
                        ErrorCode = 4040 
                    });
                }
            }
        }
    }
}