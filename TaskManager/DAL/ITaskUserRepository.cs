using System.Linq;
using TaskManager.Models;

namespace TaskManager.DAL
{
    public interface ITaskUserRepository
    {
        IQueryable<TaskUser> Tasks { get; }
        void AddTask(TaskUser task);
        TaskUser UpdateTask(TaskUser task);
        TaskUser DeleteTask(int taskId);
        TaskUser SetCompletedTask(int taskId, bool isCompleted);
    }
}
