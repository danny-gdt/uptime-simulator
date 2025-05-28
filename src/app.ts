import express from 'express';
import dotenv from 'dotenv';

// Configuration
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const failureRate = Number(process.env.FAILURE_RATE) || 0.1;

// Middleware
app.use(express.json());

// Health check endpoint
const healthCheck = (_req: any, res: any) => {
  // Simulate random failures based on failure rate
  if (Math.random() < failureRate) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      timestamp: new Date().toISOString()
    });
    return;
  }

  res.status(200).json({
    status: 'ok',
    message: 'Service is healthy',
    timestamp: new Date().toISOString()
  });
};

// Main endpoint
const mainHandler = (_req: any, res: any) => {
  res.json({
    message: 'Uptime Simulator API',
    endpoints: {
      health: '/health'
    }
  });
};

app.get('/health', healthCheck);
app.get('/', mainHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Failure rate set to ${failureRate * 100}%`);
}); 