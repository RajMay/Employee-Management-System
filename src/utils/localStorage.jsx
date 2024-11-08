
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Complete the project documentation.",
        "date": "2024-11-05",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 2",
        "description": "Fix bugs in the authentication module.",
        "date": "2024-11-06",
        "category": "Bug Fixing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 3",
        "description": "Update website with new design layout.",
        "date": "2024-10-28",
        "category": "Design"
      }
    ],
    "taskcount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Review and merge new code changes.",
        "date": "2024-11-05",
        "category": "Code Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Write unit tests for user module.",
        "date": "2024-10-29",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 3",
        "description": "Implement caching mechanism.",
        "date": "2024-11-02",
        "category": "Optimization"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 4",
        "description": "Set up new development environment.",
        "date": "2024-11-07",
        "category": "Setup"
      }
    ],
    "taskcount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Deploy application to production server.",
        "date": "2024-11-06",
        "category": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Prepare weekly report for management.",
        "date": "2024-11-01",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 3",
        "description": "Analyze customer feedback.",
        "date": "2024-11-07",
        "category": "Analysis"
      }
    ],
    "taskcount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Arjun",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Optimize database queries.",
        "date": "2024-11-06",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Conduct training for new team members.",
        "date": "2024-10-28",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 3",
        "description": "Update API documentation.",
        "date": "2024-11-02",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 4",
        "description": "Monitor server logs for errors.",
        "date": "2024-11-05",
        "category": "Monitoring"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 5",
        "description": "Set up email notifications for alerts.",
        "date": "2024-10-30",
        "category": "Setup"
      }
    ],
    "taskcount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 2
    }
  },
  {
    "id": 5,
    "firstName": "Dhruv",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Coordinate with marketing team for product launch.",
        "date": "2024-11-08",
        "category": "Coordination"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Draft press release for new product.",
        "date": "2024-11-01",
        "category": "Writing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 3",
        "description": "Organize team meeting for Q4 planning.",
        "date": "2024-11-07",
        "category": "Planning"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 4",
        "description": "Update project timeline in tracker.",
        "date": "2024-10-29",
        "category": "Management"
      }
    ],
    "taskcount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];




     const admin =[{    
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        
      }];
      
  

export const setLocalStorage = () => {
         localStorage.setItem('employees',JSON.stringify(employees))
         localStorage.setItem('admin',JSON.stringify(admin))

}


export const getLocalStorage = () => {
  const employees = JSON.parse( localStorage.getItem('employees'))
  const admin = JSON.parse( localStorage.getItem('admin'))
   return {employees,admin}
     
      }
