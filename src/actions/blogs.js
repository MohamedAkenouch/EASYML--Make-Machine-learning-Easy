import * as api from '../api';
import { FETCH_ALL_blogs, CREATE_blog, DELETE_blog} from '../constants/actionTypes';


// Action Creators

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs();

        dispatch({ type: FETCH_ALL_blogs, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog);

        dispatch({ type: CREATE_blog, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id);

        dispatch({ type: DELETE_blog, payload: id });
    } catch (error) {
        console.log(error);
    }
}