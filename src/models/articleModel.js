var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
  },
  id:Number,
  viewCount:Number,
  commentCount:Number,
  time:String,
  coverImg:String,
  author:String,
  tags:Array,
  isPublish:Boolean
});

module.exports = mongoose.model('articles', articleSchema);