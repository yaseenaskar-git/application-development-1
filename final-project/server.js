const express = require('express');
const session = require('express-session');

const usersRoutes = require('./routes/users-routes');
const tasksRoutes = require('./routes/tasks-routes');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(express.json());

// Session Authentication
app.use(
  session({
    secret: 'replace_with_long_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 // 1 hour
    }
  })
);

// Routes
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

// 404
app.use((req,res)=>{
  res.status(404).json({
    error: {
      status:404,
      message:'Route not found'
    }
  });
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});