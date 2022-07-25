require('dotenv').config();
const { ADMIN_PASS } = process.env.ADMIN_PASS;

const seed = (req, res) => {
    const { password } = req.body;
    if (password == ADMIN_PASS) {
        console.log('running seeds');
    } else {
        res.status(401);
    };
};

module.exports = {
    seed
}