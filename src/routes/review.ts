import { Router } from 'express';
import { createReview, getReviews } from '../controllers/reviewController';
import auth from '../middleware/auth';

const router = Router();

router.post('/', auth, createReview);
router.get('/', auth, getReviews);

export default router;
    