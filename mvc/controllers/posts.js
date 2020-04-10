const getPosts = function(req, res) {
    res.render("post_templates/posts");
}

const getSinglePost = function(req, res) {
    let postId = req.params.id;
    res.render("post_templates/post", { id: postId });
}

module.exports = {
    getPosts,
    getSinglePost
}

