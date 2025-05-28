# Uptime Simulator

A simple web service that simulates uptime/downtime scenarios. This service randomly returns success (200 OK) or error (500 Internal Server Error) responses based on a configurable failure rate.

## Features

- Health check endpoint that simulates random failures
- Configurable failure rate through environment variables
- Built with TypeScript and Express.js
- Docker support (coming soon)
- Kubernetes deployment (coming soon)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd uptime-simulator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
PORT=3000
FAILURE_RATE=0.1  # 10% failure rate
```

## Development

To run the application in development mode:

```bash
npm run dev
```

## Building and Running

To build the application:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## API Endpoints

### GET /
Returns basic information about the API.

### GET /health
Health check endpoint that simulates failures based on the configured failure rate.

Response format:
```json
{
  "status": "ok|error",
  "message": "Service is healthy|Internal Server Error",
  "timestamp": "ISO-8601 timestamp"
}
```

## Environment Variables

- `PORT`: The port number for the server (default: 3000)
- `FAILURE_RATE`: Probability of the health check failing (default: 0.1) 