import express from "express";

import { getBlogs, getBlogsExpert, getBlog, createBlog, deleteBlog } from '../controllers/blogs.js';

const router = express.Router();

/* CRUD operation for blog */
// Get all blogs sorting by date
router.get('/', getBlogs);

// Get all blogs for 1 expert
router.get('/experts/:expertId/blogs', getBlogsExpert);

// Get 1 blog from 1 expert
router.get('/experts/:expertId/blogs:blogId', getBlog);

// create a blog for an expert
router.post('/', createBlog);

// delte a blog for an expert
router.delete('/:id', deleteBlog);


// update 1 blog belonging to 1 expert

// delete 1 blog belonging to 1 expert
router.delete('/experts/:expertId/blogs:blogId', deleteBlog);

export default router;