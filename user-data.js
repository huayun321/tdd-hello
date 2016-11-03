var fs = require('co-fs');
var usersFile = './users.json';

module.exports = {
    users: {
        get: function *() {
            var data = yield fs.readFile(usersFile, 'utf-8');
            return JSON.parse(data);
        },

        save: function *(user) {
            var users = yield this.get();

            users.push(user);

            yield fs.writeFile(usersFile, JSON.stringify(users));
        }
    }
}