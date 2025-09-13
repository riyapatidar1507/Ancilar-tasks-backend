const express =  require("express");
const app = express();
const port = 8080;

//middlewares
app.use(express.urlencoded({extended: true}));

let posts = {
    id: string, 
    title: string, 
    content: string, 
    createdAt: Date
}

let comments = { 
    id: string, 
    postId: string, 
    author: string, 
    text: string, 
    createdAt: Date 
}





// GET /posts: Retrieve all posts.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update a post’s title or content.

// DELETE /posts/:id: Remove a post and all its comments.

// POST /posts/:id/comments: Add a comment to a post.
// GET /posts/:id/comments: List comments for a post.
// DELETE /comments/:id: Delete a specific comment.


//apis
//GET
app.get("/posts",(req,res) => {
    res.send({posts});
})

//POST
app.post("/posts",(req,res) => {
    let {id, title , content ,createdAt} = req.body;
    posts.push({id,title,content, createdAt});
    res.redirect("/posts");
})


// PUT
app.put("/comments/:id",(req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id); //matching user input id with the id of post 
    post.content = newContent;
    console.log(post);
    
    res.send("put request recieved");
})

app.delete();

//comments:
//GET
app.get("/posts/:id/comments",(req,res) => {
     let {id} = req.body;
    let comment = bookings.find((i) => id === i.id); 
    res.send({comment});
})

//POST
app.post("/posts/:id/comments",(req,res) => {
    let {id, postId , author, text ,createdAt} = req.body;
    posts.push({id,postId , author, text , createdAt});
    res.redirect("/posts");
})

app.delete();



app.listen(port, ()=>{
    console.log(`App is listnening on Port ${port}`);
});