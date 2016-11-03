require('co-mocha');
require('should');
var data = require('../user-data');
var fs = require('co-fs');

before(function *() {
    yield fs.writeFile('./users.json', '[]');
});

describe('user data', function() {
    it('should have +1 user count after saving', function* () {
        var users = yield data.users.get();

        yield data.users.save({name: 'john'});

        var newUsers = yield data.users.get();

        newUsers.length.should.equal(users.length +1);
    });
});