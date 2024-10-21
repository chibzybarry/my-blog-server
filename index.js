const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://profsaincodewave:win123456@cluster0.hmhgq.mongodb.net/gmcblogdb?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Connected to MongoDB");
    const app = express();
    const port = 8080;

    // middleware
    app.use(express.json());
        
    // connect routers
    app.use('/api', postRoutes);
    app.use('/api', userRoutes);

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
    })
    .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    });


