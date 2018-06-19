var articleService = require('../services/articleService');

module.exports = {
  createArticle: (req, res, next) => {
    console.log(1);
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
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        next(err);
      });
  },
  getArticle: (req, res, next) => {
    articleService
      .getArticle(req.body.articleId)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
};
