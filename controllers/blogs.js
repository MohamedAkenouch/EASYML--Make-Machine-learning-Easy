import Blog from '../models/Blog.js';


// Get all blogs sorting by date
export const getBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find({}).sort({ date: -1 });

        res.status(200).json(blogs);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};

// Get all blogs for 1 expert
export const getBlogsExpert = async (req, res) => {
    try{
        const blogs = await Blog.find({idExpert: req.params.expertId});

        res.status(200).json(blogs);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};

// Get 1 blog from 1 expert
export const getBlog = async (req, res) => {
    try{
        const blog = await Blog.findOne({idExpert: req.params.expertId, _id: req.params.blogId});

        res.status(200).json(blog);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};

// create a blog for an expert

// update 1 blog belonging to 1 expert
export const createBlog = async (req, res) => {
    const {  title,content, selectedFile, idExpert} = req.body;

    const newBlog = new Blog({   title ,content, selectedFile, idExpert })

    try {
        await newBlog.save();

        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// delete 1 blog belonging to 1 expert
export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try{
        const blog = await Blog.findOneAndDelete({ _id: id});

        res.status(200).json(blog);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};


