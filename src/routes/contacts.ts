import Express from 'express';
import { getContacts } from '../controllers/Contacts';
const router = Express.Router();




router.get('/', getContacts);

module.exports = router;