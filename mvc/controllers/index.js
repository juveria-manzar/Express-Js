const renderIndex = function(req, res, next) {
    res.render('index', { title: 'Express' });
}


const renderShop = function(req, res) {
    res.render('shop');
}


const renderTickets = function(req, res) {
    res.render('tickets');
}


const renderStats = function(req, res) {
    res.render('stats');
}


const renderAwesome = function(req, res) {
    res.send("<h1>Hello, World</h1><a href='/'>Go Back Home</a>");
}


const renderRegisterForm = function(req, res) {
    res.render('register_form');
}


const registerUser = function(req, res) {
    let submissionData = {
        msg: "The user registered with these credentials.",
        username: req.body.username,
        password: req.body.password
    }
    res.json(submissionData);    
}


const getUsers = function(req, res) {
    let msg = { msg: "Finding users filtered by a query", filters: [] };
    
    let role = req.query.role || "";
    let recentSubs = req.query.new || "";
    let gender = req.query.gender || "";
    
    role && (msg.filters.push({ role: role }));
    recentSubs && (msg.filters.push({ recent_subscribers: true }));
    gender && (msg.filters.push({ gender: gender }));
    
    res.json(msg);
}


const getSingleUser = function(req, res) {
    let id = req.params.userid;
    res.json(`Getting the user with id: ${id}`);
}


const renderEjsExample = function(req, res) {
    let data = { 
        title: "EJS Example Page",
        body: "Monetization conversion ramen social media ecosystem sales branding alpha buzz. Vesting period gamification customer social media founders traction business plan marketing ramen business-to-consumer partnership. Seed round rockstar value proposition. Strategy burn rate founders.",
        backend: ["Express", "MVC", "RESTful API", "MongoDB"],
        frontend: {
            markup: "HTML",
            styles: "Sass",
            scripts: "JavaScript",
            frameworks: {
                css: "Bootstrap",
                spa: "Angular"
            }
        }
     };
    res.render("examples", data);
}


const render404 = function(req, res) {
    res.render("404");
}



module.exports = {
    renderIndex,
    renderShop,
    renderTickets,
    renderStats,
    renderAwesome,
    renderRegisterForm,
    registerUser,
    getUsers,
    getSingleUser,
    renderEjsExample,
    render404
}