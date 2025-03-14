# Kankan App

## Description

- **Motivation**: to provide a simple, efficient way for teams and individuals to manage tasks and track progress in a visual, easy-to-use environment. This app helps streamline workflow management, providing a digital board where users can create, update, and track the status of tasks (tickets).By integrating a PostgreSQL database with Supabase for user authentication and data storage, this project serves as a full-stack solution for task management. This app can be particularly useful for teams who need a simple tool to organize their tasks, as well as those looking to learn about full-stack development, CRUD operations, and authentication using JWT tokens.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Future Add-ons](#future-add-ons)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)

## Installation
- Prerequisites:Node.js (v16 or higher),PostgreSQL database (on Supabase or locally),A GitHub account (if you want to contribute or fork the project)
- Clone the Repository:
```
git clone github.com/HMasese/kankan.git
```
- Install Dependencies
```
npm install
```
- Set up a PostgreSQL database on Supabase or locally.
- Create a .env file in the root directory of your project and add the necessary environment variables:
```
DB_URL=your_supabase_database_url
DB_Password=your_password
DB_NAME=db_name
DB_USERNAME=db_username
JWT_SECRET=your_jwt_secret
```
- Start the development Server
```
npm run dev
```

## Usage
1. Sign Up and Log In:

    - To start using the Kanban app, sign up for a new account or log in if you already have one.
    - After signing up, a JWT token will be assigned to authenticate your session.

2. Create New Tickets:

    - Navigate to the "Create Ticket" section.
    - Add a title, description, and set an initial status for the ticket (e.g., "To Do").

3. Update Ticket Status:

    - Drag and drop tickets between columns (e.g., "To Do", "In Progress", "Done").
    - The status of the ticket will be automatically updated in the database.

4. Manage Your Tickets:

    - You can edit or delete tickets as needed by clicking on them.

## Credits
TA kayvon, phil, aley, dylan, nicole

## License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. https://choosealicense.com/licenses/mit/

## Future Add-ons
- Task Prioritization: Adding priority levels to tickets (low, medium, high) to improve task management.
- Real-Time Collaboration: Implementing WebSockets or polling to allow multiple users to collaborate and update tasks in real-time.
- Notifications: Adding notifications when a ticket's status changes or when deadlines are approaching.
- Task Filtering: Filtering tasks based on status, priority, or due date.

## Tests
```
npm run test
```

## Questions
- For Further Questions and Bug reports Please reach out to me at Github [https://github.com/HMasese] or email me at harrietm616@gmail.com

- Use Username: hmasese (uppercase J and G) and password: password for login.
- [Deployed site]
- [Github Repo](https://github.com/HMasese/kankan)
