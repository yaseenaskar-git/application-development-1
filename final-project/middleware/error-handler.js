module.exports = (err,req,res,next)=>{
console.error(err);

res.status(500).json({
error:{
status:500,
message:'Server error'
}
});
};