// UI specs: A list of all students.json sorted by name
// Details to display: name, email, date, commitMessage

// Backend Test scenario
const axios = require('axios');
// # https://api.github.com/repos/:user/:repo/commits
// user: asaadsaad
// repo: me
axios.get('https://api.github.com/repos/asaadsaad/me/commits')
    .then(res => res.data.map(node => node.commit))
    .then(data => data.map(commit => ({
        committer: commit.committer.name,
        email: commit.committer.email,
        date: commit.committer.date,
        message: commit.message
    })))
    .then(result => console.log(result))


// axios API: Performing multiple concurrent requests
/*
function getUserAccount() {
return axios.get('/user/12345');
}

function getUserPermissions() {
return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));
*/