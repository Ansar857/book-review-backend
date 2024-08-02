import { Request, Response } from 'express';
import Review from '../models/Review';

const createReview = async (req: Request, res: Response) => {
  const { title, author, text, rating } = req.body;
  try {
    const review = new Review({
      title,
      author,
      text,
      rating,
      userId: req.user?.userId,
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ userId: req.user?.userId });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

export { createReview, getReviews };
