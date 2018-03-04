const crypto = require('crypto');

module.exports = (app) => {
    app.post('/group', (req, res) => {

        const groupId = crypto.randomBytes(5).toString('hex');
        const groupToken = crypto.randomBytes(20).toString('hex');
        res.json({groupId, groupToken});
    });

    app.post('/group/:groupId/user/:userId', (req, res) => {
        const groupId = req.params.groupId;
        const userId = req.params.userId;
        const token = req.body.token;

        res.json({status: `Joined group ${groupId} with user ${userId}. Token was: ${token}`});
    });
};