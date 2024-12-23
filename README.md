# GitBattle 🚀  

Gamify your open-source journey!  
GitBattle is a platform that tracks developers' contributions to open-source repositories and adds gamification elements like leaderboards, badges, and real-time notifications to encourage consistent participation and growth in the open-source community.

## Features ✨  

- **Automated Contribution Tracking**  
  - Syncs with GitHub and GitLab APIs to fetch pull requests, commits, and issues.  

- **Gamification**  
  - Earn points, badges, and achievements based on your contribution types.  
  - Compete with peers on weekly, monthly, and all-time leaderboards.  

- **Real-Time Notifications**  
  - Stay updated with alerts for PR merges, badge achievements, and rank changes.  

- **User Dashboard**  
  - Visualize your contribution trends and milestones with interactive graphs and charts.  

- **Admin Panel**  
  - Configure platform rules, manage point systems, and monitor API usage limits.  

- **Scalable Backend**  
  - Powered by Docker, GRPC, and Redis for low-latency communication and high availability.  

---

## Tech Stack 🛠  

### Frontend  
- **React**: Dynamic, interactive UI.  
- **TailwindCSS**: Modern and responsive styling.  

### Backend  
- **Node.js**: REST API and business logic.  
- **MongoDB**: Database for storing user profiles and contributions.  
- **Redis**: Caching frequently accessed data for high-speed performance.  

### Infrastructure  
- **Docker**: Containerized services for easy scalability.  
- **GRPC**: Fast communication between microservices.  
- **WebSockets**: Real-time notifications.  

### APIs  
- **GitHub/GitLab APIs**: Fetches contributions like pull requests, issues, and commits.  

---

## Setup and Installation ⚙️  

### Prerequisites  
- [Node.js](https://nodejs.org/)  
- [Docker](https://www.docker.com/)  
- [MongoDB](https://www.mongodb.com/)  
- Redis  

### Steps  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/gitbattle.git
   cd gitbattle

2. Install dependencies for the backend and frontend:

    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install

3. Set up your .env file in the backend folder:

    ```env
    Copy code
    GITHUB_API_KEY=your_github_api_key
    GITLAB_API_KEY=your_gitlab_api_key
    MONGO_URI=your_mongo_connection_string
    REDIS_URL=your_redis_url
    JWT_SECRET=your_jwt_secret

4. Start the services using Docker:

    ```bash
    Copy code
    docker-compose up 

5. Access the application:

    Frontend: http://localhost:3000
    Backend: http://localhost:5000

---


## Contributing 🤝
We welcome contributions to make GitBattle even better! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
3. Commit your changes:
    ```bash
    git commit -m "Add your message here"
4. Push the branch:
    ```bash
    git push origin feature/your-feature-name
5. Submit a Pull Request.


---

## Contact 📬
For questions or feedback, feel free to open an issue or reach out at ritesh.davv@gmail.com .

Let me know if you'd like to adjust the structure or content!
