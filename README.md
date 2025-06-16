# 🚀 NestJS Redis Microservices (Dockerized)

This project demonstrates how two microservices built with **NestJS** communicate using **Redis** as a message broker. It includes:

- REST APIs
- Microservice-to-microservice messaging (via Redis)
- Unit tests
- Docker and docker-compose setup
- Proper Git commit structure

---

## 📦 Project Structure

```
nestjs-redis-microservices/
├── docker-compose.yml
├── service-a/
│   ├── src/
│   │   ├── app.controller.ts   # REST endpoint: /double/:num
│   │   ├── app.service.ts      # Sends num to service-b via Redis
│   │   └── main.ts             # Starts the HTTP app
│   ├── Dockerfile
│   └── ...
├── service-b/
│   ├── src/
│   │   ├── app.controller.ts   # REST endpoint: /square/:num
│   │   ├── app.service.ts      # Handles Redis messages (e.g., double)
│   │   └── main.ts             # Starts both REST and Redis microservice
│   ├── Dockerfile
│   └── ...
```

---

## 🛠 Tech Stack

- **NestJS** (v10)
- **Redis** (as message broker)
- **RxJS** (for async streams)
- **Docker** & **Docker Compose**
- **Jest** (unit testing)

---

## 🔌 Microservice Communication

- `service-a` acts as a **client**, sending a number to `service-b` via Redis.
- `service-b` listens for messages using `@MessagePattern`, doubles the number, and replies.

---

## 🚀 Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/YOUR_USERNAME/nestjs-redis-dockerized.git
cd nestjs-redis-dockerized
```

### 2. Start All Services via Docker

```bash
docker-compose up --build
```

This will start:
- Redis server
- `service-a` on port **3000**
- `service-b` on port **3001**

---

## 🔍 Test API Endpoints

### From `service-a` (calls service-b via Redis):

```bash
curl http://localhost:3000/double/5
# ➜ { "result": 10 }
```

### From `service-b` (local logic, no Redis):

```bash
curl http://localhost:3001/square/7
# ➜ { "result": 49 }
```

---

## 🧪 Running Tests

Inside `service-a/` or `service-b/`:

```bash
npm install
npm run test
```

---

## ✅ Requirements Implemented

| Feature                             | Status |
|-------------------------------------|--------|
| Two NestJS services                 | ✅     |
| Redis-based messaging (double)      | ✅     |
| REST endpoint in service-a          | ✅     |
| REST endpoint in service-b          | ✅     |
| Docker + docker-compose setup       | ✅     |
| Unit tests + Jest config            | ✅     |
| Git commit structure with comments  | ✅     |

---

---

## 🧑‍💻 Author

Built by **Taha Yassin**  
Feel free to fork, star, or contact for feedback or contributions!