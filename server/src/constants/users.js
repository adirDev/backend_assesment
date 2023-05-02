const {DEPARTMENTS} = require('./jobs');

const USERS = [
    {
        email: 'a@joonko.co',
        password: '123456',
        departments: [DEPARTMENTS.RND]
    },
    {
        email: 'b@joonko.co',
        password: '1234567',
        departments: [DEPARTMENTS.MARKETING]
    },
    {
        email: 'c@joonko.co',
        password: '1234578',
        departments: [DEPARTMENTS.PRODUCT]
    },
    {
        email: 'd@joonko.co',
        password: '12345789',
        departments: [DEPARTMENTS.PRODUCT, DEPARTMENTS.MARKETING, DEPARTMENTS.RND]
    }
]

module.exports = USERS;