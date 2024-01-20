const { BlogService } = require('../services');
const { blogResource } = require('../resources');

class BlogController {
    static async index(req, res) {
        try {
            const { page } = req.query;
            // const blogs = await BlogService.getAllBlogs();
            const blogs = await BlogService.getPaginatedBlogs(parseInt(page));
            const blogsData = blogResource(blogs);
            if (blogs.length != 0) {
                return res.success({ blogs: blogsData }, "Blogs found!");
            }
            return res.error("no Blogs found!");
        } catch (error) {
            console.log(error);
            return res.error('Internal Server Error', 500);
        }
    }

    static async create(req, res) {
        try {
            const blog = await BlogService.insertBlog(req.body);
            return res.success({ blog }, "Blog created successfully!")
        } catch (error) {
            console.error(error);
            return res.error('Internal Server Error', 500);
        }
    }

    static async show(req, res) {
        const { id } = req.params;
        try {
            const blog = await BlogService.getBlogById(id);
            if (!blog) {
                return res.error("Blog not found", 404);
            }
            const blogData = blogResource(blog);
            return res.success({ blog: blogData }, "Blog found!")
        } catch (error) {
            return res.error('Internal Server Error', 500);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        try {
            const blog = await BlogService.updateBlog(id, req.body);
            return res.success(null, "Blog updated successfully!");
        } catch (error) {
            return res.error('Internal Server Error', 500);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await BlogService.deleteBlog(id);
            return res.success(null, "Blog deleted successfully!");
        } catch (error) {
            return res.error('Internal Server Error', 500);
        }
    }
}

module.exports = BlogController;