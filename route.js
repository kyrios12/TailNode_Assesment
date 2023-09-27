const express = require('express');
const port = 2000;
const app = express();
const db = require('././config/mongoose');

// Fetch and store Users from the API
app.get('/fetch-users', async (req, res) => {
    try {
      const response = await axios.get('https://dummyapi.io/data/v1/user', {
        headers: {
          'app-id': '651440d464575f4b0c403784',
        },
      });
  
      const usersData = response.data.data;
  
      // Store usersData in the 'users' collection
      // Loop through usersData and create User documents
      // Save the documents to the MongoDB 'users' collection
  
      res.json({ message: 'Users fetched and stored in the database.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching users from the API.' });
    }
  });
  
  // Fetch and store Posts for a specific User
  app.get('/fetch-posts/:user_id', async (req, res) => {
    const { user_id } = req.params;
  
    try {
      const response = await axios.get(
        `https://dummyapi.io/data/v1/user/${user_id}/post`,
        {
          headers: {
            'app-id': '651440d464575f4b0c403784',
          },
        }
      );
  
      const postsData = response.data.data;
  
      // Store postsData in the 'posts' collection
      // Loop through postsData and create Post documents
      // Save the documents to the MongoDB 'posts' collection
  
      res.json({ message: 'Posts fetched and stored in the database.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching posts from the API.' });
    }
  });



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server is up on port ${port}`);
})