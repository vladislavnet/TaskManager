using Microsoft.AspNetCore.Mvc;
using System.Linq;
using TaskManager.DAL;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : Controller
    {
        private ITaskUserRepository repository;
        public TaskController(ITaskUserRepository repo)
        {
            repository = repo;
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult Get()
        {
            return Json(repository.Tasks.OrderBy(t => t.PlanedStartDateTime));
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult Add(TaskUser task)
        {
            if (!ModelState.IsValid)
                return StatusCode(400);
            
            repository.AddTask(task);
            return Ok();         
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult Update(TaskUser task)
        {
            if (!ModelState.IsValid)
                return StatusCode(400);

           TaskUser taskUser = repository.UpdateTask(task);
            if (taskUser == null)
                return NotFound();

            return Ok();
        }

        [HttpPost]
        [Route("[action]/{id}")]
        public IActionResult Delete(int id)
        {
            TaskUser task = repository.DeleteTask(id);
            if (task == null)
                return NotFound();
            else
                return Ok();
        }

        [HttpPost]
        [Route("[action]/{id}/{isCompleted}")]
        public IActionResult SetCompleted(int id, bool isCompleted)
        {
            TaskUser task = repository.SetCompletedTask(id, isCompleted);
            if (task == null)
                return NotFound();
            else
                return Ok();
        }
        
    }
}
