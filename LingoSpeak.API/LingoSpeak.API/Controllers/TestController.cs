using Microsoft.AspNetCore.Mvc;

namespace LingoSpeak.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet("hello")]
        public IActionResult Hello()
        {
            return Ok("Hello from LingoSpeak backend!");
        }
    }
}