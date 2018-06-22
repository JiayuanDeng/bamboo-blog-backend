var articleModel = require('../models/articleModel');
var errorLib = require('../libs/errorLib');


module.exports = {
    getArticles: (searchCondition) => {

    },
    createArticle: (articleData) => {
        var currentTime = Date.now();
        articleData = {
            ...articleData,
            viewCount: 0,
            commentCount: 0,
            createTime: currentTime,
            updateTime: currentTime
        };
        return articleModel.create(articleData);
    },
    getArticle: (articleId) => {
        return articleModel.findById(articleId).exec();
    },
    updateArticle: (articleData) => {

    },
    deleteAriticle: () => {

    }
};