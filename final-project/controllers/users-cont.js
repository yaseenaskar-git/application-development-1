const pool = require('../db');
const bcrypt = require('bcrypt');

exports.login = async (req,res,next)=>{
try {

const { email, password } = req.body;

const [users] = await pool.execute(
'SELECT id,name,email,password_hash FROM users WHERE email = ?',
[email]
);

if(users.length === 0){
return res.status(401).json({
error:{
status:401,
message:'Invalid credentials'
}
});
}

const user = users[0];

const validPassword = await bcrypt.compare(
password,
user.password_hash
);

if(!validPassword){
return res.status(401).json({
error:{
status:401,
message:'Invalid credentials'
}
});
}

// store session
req.session.userId = user.id;
req.session.userName = user.name;

res.status(200).json({
message:'Login successful',
user:{
id:user.id,
name:user.name,
email:user.email
}
});

} catch(err){
next(err);
}
};


exports.logout = (req,res,next)=>{
req.session.destroy((err)=>{
if(err) return next(err);

res.status(200).json({
message:'Logged out successfully'
});
});
};


exports.currentUser = async(req,res,next)=>{
try{

if(!req.session.userId){
return res.status(401).json({
error:{
status:401,
message:'Not logged in'
}
});
}

const [users] = await pool.execute(
'SELECT id,name,email FROM users WHERE id=?',
[req.session.userId]
);

res.status(200).json(users[0]);

}catch(err){
next(err);
}
};