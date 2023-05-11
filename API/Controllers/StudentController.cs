using DeltaAirlinesTask.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeltaAirlinesTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [HttpPost]
        public ActionResult<IEnumerable<Student>> GetStudents()
        {
            var students = new List<Student>
            {
                new Student
                {
                    Name = "Alice",
                    Age = 20,
                    Hobbies = new List<string> { "reading", "swimming", "coding" }
                },
                new Student
                {
                    Name = "Bob",
                    Age = 22,
                    Hobbies = new List<string> { "painting", "dancing", "singing" }
                }
            };

            return Ok(new { students });
        }
    }
}
