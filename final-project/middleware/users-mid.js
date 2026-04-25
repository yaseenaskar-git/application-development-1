module.exports = function(req,res,next){

if(!req.session.userId){
return res.status(401).json({
error:{
status:401,
message:'Authentication required'
}
});
}

next();
};