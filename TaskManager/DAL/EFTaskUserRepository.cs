using System.Linq;
using TaskManager.Models;

namespace TaskManager.DAL
{
    public class EFTaskUserRepository : ITaskUserRepository
    {
        private ApplicationContext context;
        public EFTaskUserRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public IQueryable<TaskUser> Tasks => context.Tasks;

        public void AddTask(TaskUser task)
        {
            context.Tasks.Add(task);
            context.SaveChanges();
        }

        public TaskUser SetCompletedTask(int taskId, bool isCompleted)
        {
            TaskUser task = context.Tasks
                .FirstOrDefault(t => t.Id == taskId);
            if(task != null)
            {
                task.IsCompleted = isCompleted;
                context.SaveChanges();
            }
            return task;
        }

        public TaskUser DeleteTask(int taskId)
        {
            TaskUser task = context.Tasks
                .FirstOrDefault(t => t.Id == taskId);
            if(task != null)
            {
                context.Remove(task);
                context.SaveChanges();
            }
            return task;
        }

        public TaskUser UpdateTask(TaskUser task)
        {
            TaskUser taskUser = context.Tasks
                .FirstOrDefault(t => t.Id == task.Id);
            if(taskUser != null)
            {
                taskUser.Message = task.Message;
                taskUser.IsCompleted = task.IsCompleted;
                taskUser.PlanedStartDateTime = task.PlanedStartDateTime;
                taskUser.PlanedComplitionDateTime = task.PlanedComplitionDateTime;
                context.SaveChanges();
            }
            return taskUser;
        }
    }
}
