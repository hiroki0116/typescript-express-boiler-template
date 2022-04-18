import Express from 'express';
import { getUsers, registerUser } from '../controllers/Users';
const router = Express.Router();

router.get('/', getUsers);
router.post('/',registerUser);


module.exports = router;