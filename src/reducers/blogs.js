import { CREATE_blog, FETCH_ALL_blogs, DELETE_blog } from '../constants/actionTypes';

export default (blogs = [], action) => {
    switch (action.type) {
        case CREATE_blog:
            return [...blogs, action.payload];
        case FETCH_ALL_blogs:
            return action.payload;
        case DELETE_blog:
            return blogs.filter((blog) => blog._id !== action.payload);
        default:
            return blogs;
    }
}