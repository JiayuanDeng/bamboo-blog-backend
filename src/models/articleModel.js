var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  id:Number,
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
  },
  author:String,
  tags:Array,
  coverImg:String,
  viewCount:Number,
  commentCount:Number,
  createTime:String,
  updateTime:String,
  creator:String,
  isPublish:Boolean
});

module.exports = mongoose.model('articles', articleSchema);