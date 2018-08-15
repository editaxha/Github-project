const _ = require('lodash');
const express = require('express');
const router = express.Router();
const GitData = require('../models/gitUser');

router.post('/', async (req, res) => {
    try{
    let gituserdata = await GitData.findOne({ id: req.body.id });
    if (gituserdata && isEquivalent(gituserdata, req.body) == true) return 

    gituserdata = new GitData({
        login: req.body.login,
        id: req.body.id,
        node_id: req.body.node_id,
        avatar_url: req.body.avatar_url,
        gravatar_id: req.body.gravatar_id,
        url: req.body.url,
        html_url: req.body.html_url,
        followers_url: req.body.followers_url,
        following_url: req.body.following_url,
        gists_url: req.body.gists_url,
        starred_url: req.body.starred_url,
        subscriptions_url: req.body.subscriptions_url,
        organizations_url: req.body.organizations_url,
        repos_url: req.body.repos_url,
        events_url: req.body.events_url,
        received_events_url: req.body.received_events_url,
        type: req.body.type,
        site_admin: req.body.site_admin,
        name: req.body.name,
        company: req.body.company,
        blog: req.body.blog,
        location: req.body.location,
        email: req.body.email,
        hireable: req.body.hireable,
        bio: req.body.bio,
        public_repos: req.body.public_repos,
        public_gists: req.body.public_gists,
        followers: req.body.followers,
        following: req.body.following,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
        private_gists: req.body.private_gists,
        total_private_repos: req.body.total_private_repos,
        owned_private_repos: req.body.owned_private_repos,
        disk_usage: req.body.disk_usage,
        collaborators: req.body.collaborators,
        two_factor_authentication: req.body.two_factor_authentication,
        plan: {
            name: req.body.plan.name,
            space: req.body.plan.space,
            collaborators: req.body.plan.collaborators,
            private_repos: req.body.plan.private_repos
        }
    });
    await gituserdata.save();

    res.status(200).send("great");
}
catch(ex){
    res.status(500).send('Something failed,');
}
});
function isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a.toJSON());
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;

    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (propName != "created_at" && propName != "updated_at" && propName != "plan") {
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
    }
    return true;
}
module.exports = router;

