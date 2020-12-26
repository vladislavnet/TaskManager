using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManager.Models
{
    public class TaskUser
    {
        public int Id { get; set; }
        [Required]
        public string Message { get; set; }
        public bool IsCompleted { get; set; } = false;
        [Required]
        public DateTime PlanedStartDateTime { get; set; }
        [Required]
        public DateTime PlanedComplitionDateTime { get; set; }
    }
}
