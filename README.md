# Smart Complaint Management System

A college-focused platform that manages, categorizes, and prioritizes student complaints using Node.js, FastAPI, and ML models.

---

## Project Structure

```
smart-complaint-system/
├── server/          # Node.js + Express backend
├── fastapi-ml/      # FastAPI ML service
└── README.md
```

---

## Running the Project

### 1. Node.js Backend

```bash
cd server
npm install
npm run dev
```

Runs at `http://localhost:5000`

### 2. FastAPI ML Service

```bash
cd fastapi-ml
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs at `http://localhost:8000`

> Both services must be running simultaneously for the system to work.

---

## Environment Variables

Create a `.env` file inside `server/`:

```
PORT=5000
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register (requires @vit.edu.in email) |
| POST | `/api/auth/login` | Login, sets HTTP-only cookie |
| POST | `/api/auth/logout` | Logout |

### Complaints (Student)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/complaints` | Submit complaint (calls ML pipeline) |
| GET | `/api/complaints/my` | Get own complaints |

### Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/complaints` | All complaints sorted by urgency |
| PATCH | `/api/admin/complaints/:id/status` | Update complaint status |

---

## ML Pipeline

Each complaint goes through:
1. Category classification (FastText via HuggingFace Gradio Space)
2. Clustering (sentence-transformers)
3. Urgency prediction (XGBoost)

Returns: `category`, `cluster_id`, `cluster_count`, `urgency`

---

## Tech Stack

- Node.js + Express
- FastAPI + Python
- PostgreSQL (Neon)
- JWT + bcrypt
- sentence-transformers, XGBoost, FastText
