const express =  require("express");
const app = express();
const port = 8080;

//middlewares
app.use(express.urlencoded({extended: true}));

let event = {
    id: string, 
    name: string, 
    date: Date,
    capacity : Number,
    bookedSeats: number
}

let bookings = { 
    id: string, 
    eventId: string, 
    userName: string, 
    seatsBooked: number  
}



// POST /events: Create an event with date and capacity.
// GET /events: List all upcoming events.
// POST /events/:id/book: Book seats for an event.
// Reject if bookedSeats + seatsBooked > capacity.
// Increment bookedSeats on success.
// GET /events/:id/bookings: List all bookings for an event.
// DELETE /bookings/:id: Cancel a booking and decrement bookedSeats.

//GET
app.get("/events",(req,res) => {
    res.send({event});
});

//POST
app.post("/events",(req,res) => {
    let {date, capacity} = req.body;
    posts.push({date,capacity});
    console.log("added the events date and capacity");
    res.redirect("/events");
});

app.post("/events/:id/book",(req,res) => {
    let {seats} = req.body;
    if(bookedSeats + seatsBooked > capacity){
        res.send("Rejected");
    }
    seatsBooked = seatsBooked+1;
    posts.push({seatsBooked});
    console.log("added the seats books");
    res.send({});
});




app.get("/events/:id/bookings",(req,res) => {
    let {id} = req.body;
    let booking = bookings.find((b) => id === b.id);
    res.send({booking});
});