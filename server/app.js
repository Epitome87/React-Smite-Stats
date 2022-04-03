import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import matchRoutes from './routes/matchRoutes.js';

// TODO: Mongoose stuff?

// Create an Express application and store it as app
const app = express();
const port = 5000;

app.use(cors()); // Prevent 'blocked by CORS policy' error when calling our API from frontend
app.use(express.json()); // I think this is required to parse JSON?
app.use('/users', userRoutes);
app.use('/matches', matchRoutes);

// Have our Express app listen to connections on the port specified above
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
