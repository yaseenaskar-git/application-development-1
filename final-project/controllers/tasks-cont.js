const pool = require('../db');

exports.getTasks = async(req,res,next)=>{
try{

const [tasks] = await pool.execute(
`SELECT *
 FROM tasks
 WHERE user_id = ?`,
[req.session.userId]
);

res.status(200).json(tasks);

}catch(err){
next(err);
}
};