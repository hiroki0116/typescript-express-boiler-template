import Express from 'express';
import { getAuth } from '../controllers/Auth';
const router = Express.Router();


router.get('/', getAuth)


module.exports = router;