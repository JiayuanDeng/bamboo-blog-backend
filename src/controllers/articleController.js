var articleService = require('../services/articleService');

module.exports = {
    createArticle: (req, res, next) => {
        var creator = req.user.username;
        var {
            title = 'Untitled',
            content,
            author = creator,
            tags = [],
            coverImg = '',
            isPublish = false
        } = req.body;

        articleService
            .createArticle({title, content, author, tags, coverImg, isPublish, creator})
            .then((article) => {
                res.status(200).json({articleId: article._id});
            })
            .catch((err) => {
                next(err);
            });
    },
    getArticle: (req, res, next) => {
        articleService
            .getArticle(req.params.articleId)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

};
