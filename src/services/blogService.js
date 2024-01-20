const { Blog } = require('../../database/models');

class BlogService {
    static getAllBlogs() {
        return new Promise(async (resolve, reject) => {
            try {
                const blogs = await Blog.find({}).sort({ "created_at": -1 });
                resolve(blogs);
            } catch (error) {
                reject(error)
            }
        })
    }

    static getPaginatedBlogs(pageNumber = 1) {
        return new Promise(async (resolve, reject) => {
            const pageSize = 3;
            try {
                const blogs = await Blog.find({})
                    .skip((pageNumber - 1) * pageSize)
                    .limit(pageSize)
                    .exec()
                resolve(blogs);
            } catch (error) {
                reject(error)
            }
        })
    }

    static getBlogById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const blog = await Blog.findById(id);
                resolve(blog);
            } catch (error) {
                reject(error);
            }
        })
    }

    static insertBlog(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const newBlog = new Blog({
                    title: req.title,
                    snippet: req.snippet,
                    body: req.body,
                });
                const savedBlog = await newBlog.save();
                resolve(savedBlog);
            } catch (error) {
                reject(error);
            }
        })
    }

    static updateBlog(id, req) {
        return new Promise(async (resolve, reject) => {
            try {
                const updateData = {
                    title: req.title,
                    snippet: req.snippet,
                    body: req.body,
                }
                const blog = await Blog.findByIdAndUpdate(id, updateData, {
                    new: true,
                });
                resolve(blog);
            } catch (error) {
                reject(error);
            }
        })
    }

    static deleteBlog(id) {
        return new Promise(async (resolve, reject) => {
            try {
                await Blog.findByIdAndDelete(id);
                resolve();
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = BlogService;