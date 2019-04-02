const content = require('../models/content')

exports.createContent = async (req, res) => {
    let body = req.body
    if(!body.title || !body.chapter) {
        res.json({message:'Empty field detected, please check'})
    }
    else{
        const info = await content.create(req.body)
        res.json({info:info, message:'successful'})
    }
}

exports.getAllPost = async (req, res) => {
    const info = await content.find().sort({"_id":-1})
    res.json({info:info})
}

exports.getSinglePost = async (req, res) => {
    const info = await content.findOne({_id:req.params.id})
    res.json({info:info})
}

exports.updateSinglePost = async (req, res) => {
    const info = await content.findOneAndUpdate({_id: req.params.id})
    if(!info){
        res.json({message:'No post found'})
    }
    else{
        info.title = info.title || req.body.title
        info.chapter = info.chapter || req.body.chapter
        await info.save()
        res.json({message:'post updated'})
    }
}

exports.deletePost = async (req, res) => {
    const info = await content.findOneAndDelete({_id:req.params.id})
    res.json({message:'post deleted'})
}