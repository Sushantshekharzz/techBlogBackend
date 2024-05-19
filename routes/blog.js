var express = require('express');
var router = express.Router();
var User = require('../model/user');
var Blog = require('../model/blog')
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import the fs module for file system operations



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Destination directory for uploaded files
    },
    filename: (req, file, cb) => {
      // Generate a unique filename for the uploaded file
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });


  router.post('/', upload.single('image'), async (req, res) => {
    try {
      const { category, title, shortDescription, longDescription, username } = req.body;
      
      const imagePath = req.file.path; // Path to the uploaded image file
  
      // Create a new blog entry in the database
      const newBlog = await Blog.create({
        category,
        title,
        shortDescription,
        longDescription,
        image: imagePath, // Save the file path in the database
        username
      });
  
      res.status(201).json(newBlog);
    } catch (error) {
      console.error('Error creating blog entry:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

router.get('/:username', async function (req,res){
    const userName = req.params.username
    const blog = await Blog.findAll({ where: { username: userName} });
    res.send(blog)



})
router.get('/', async function (req,res){
    const blog = await Blog.findAll();
    res.send(blog)



})
router.get('/get/:id', async function (req,res){
    const id = req.params.id
    const blog = await Blog.findAll({ where: { id: id} });

    res.send(blog)



})


router.put('/:id', upload.single('image'), async function (req, res) {
    try {
      const newData = req.body;
      const id = req.params.id;
    
      // Find the blog entry by ID
      const blog = await Blog.findByPk(id);
    
      // If the blog entry exists
      if (blog) {
        // If the image is updated
        if (req.file && blog.image) {
          // Extract the filename from the updated image path
          const ext = path.extname(req.file.originalname); // Extract the file extension
          const newFilename = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext; // Generate a new unique filename
          const newImagePath = 'uploads/' + newFilename; // Construct the new image path
          newData.image = newImagePath; // Update the image path in the newData object
  
          // Move the uploaded file to the new filename
          fs.renameSync(req.file.path, newImagePath);
  
          // Delete the old image file
          fs.unlinkSync(blog.image);
        }
  
        // Update the blog entry in the database
        await blog.update(newData);
    
        res.status(200).send("Blog updated successfully");
      } else {
        res.status(404).send("Blog not found");
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error updating blog");
    }
  });
  
  
router.delete('/:index', async function (req,res){
await Blog.destroy({
      where: {
        id: req.params.index,
      },
    });

    res.send("deleted successfully")

})

module.exports = router;
