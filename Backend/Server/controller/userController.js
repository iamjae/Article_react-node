const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('../secret')

exports.signUp = async (req, res) => {
    const body = req.body
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
     if(!body.name || !body.password || !body.email){
         res.json({message:`All fields are required`, success: false})
     }
     else {
         const details = await user.create(req.body)
         details.password = hashedPassword
         await details.save()
         res.json({message:`registered successfully`, success: true, details:details})
     }
}

exports.signInUser = async (req, res) => {
    user.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            res.json('error')
        } else if (!user) {
            res.json('No user with such email')
        } else {
            const passwordIsCorrect = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsCorrect) {
                res.json('Wrong password')
            } else {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.secret_key, {
                    expiresIn: '24h'
                })
                res.json({
                    message: 'login',
                    token: token
                })
            }
        }
    })
    }

exports.getAllUser = async (req, res) => {
    const users = await user.find().sort({'_id':-1})
    res.json({info: users})
}

//get single user
exports.getSingleUser = async (req, res) => {
    const details = await user.findOne({_id: req.params.id})
    res.json({info: details})
}

//update user profile
exports.updateProfile = async (req, res) => {
    const hashedpassword = bcrypt.hashSync(req.body.password,10)
    const profile = await user.findOne({_id:req.params.id})
    if(!profile){
        res.json({message:' user not found'})
    }
    profile.name = req.body.name || profile.name
    profile.email = req.body.email || profile.email
    profile.password = hashedpassword || profile.password
    await profile.save()
    res.json({message: 'user profile successfully updated', info: profile})
}

