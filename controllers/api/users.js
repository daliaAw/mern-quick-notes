const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require ('bcrypt');
module.exports = {
  create, 
  login,
  checkToken,
};

async function create(req, res) {
    // we are gonna respond back with the data they give us
   try{
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
   }catch(err){
      res.status(400).json(err);
   }
  }
/*-- Helper Functions --*/

async function login(req, res){
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(404).json({error: 'user not found'});
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if(!passwordMatch) 
     return res.status(403).json({error: 'Password dosent match'});
    const token = createJWT(user);
      res.json(token);

}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}