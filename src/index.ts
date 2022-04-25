import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { dbConnect } from './dbhelpers/db.helper';

dotenv.config();

const app = express();
dbConnect();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const port = process.env.PORT || 8000;


app.listen(port);
console.log('Express WebApi listening on port ' + port);