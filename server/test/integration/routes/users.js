const {API_PREFIX} = require('../../testUtils');
const USERS = require('../../../src/constants/users');
const {OPEN_JOBS, DEPARTMENTS} = require('../../../src/constants/jobs');
const {app} = require('../../../src/app');
const request = require('supertest')(app);

describe('/users', () => {
    describe('/login', () => {
        const INVALID_EMAIL = 'e@joonko.co';
        const INVALID_PWD = '111111';

        it('should return 404 when email not found', () => {
            return request
                .post(`${API_PREFIX}/users/login`)
                .send({email: INVALID_EMAIL, password: INVALID_PWD})
                .expect(404);
        });

        it('should return 401 when email found but password is invalid', () => {
            return request
                .post(`${API_PREFIX}/users/login`)
                .send({email: USERS[0].email, password: INVALID_PWD})
                .expect(401);
        });

        it('should return 200 for first user', () => {
            const VALID_USER = USERS[0];

            return request
                .post(`${API_PREFIX}/users/login`)
                .send({email: VALID_USER.email, password: VALID_USER.password})
                .expect(200)
                .then(response => {
                    response.headers['set-cookie'].should.not.be.undefined();
                });
        });

        it('should return 200 for second user', () => {
            const VALID_USER = USERS[1];

            return request
                .post(`${API_PREFIX}/users/login`)
                .send({email: VALID_USER.email, password: VALID_USER.password})
                .expect(200)
                .then(response => {
                    response.headers['set-cookie'].should.not.be.undefined();
                });
        });

        it('should return 200 for third user', () => {
            const VALID_USER = USERS[2];

            return request
                .post(`${API_PREFIX}/users/login`)
                .send({email: VALID_USER.email, password: VALID_USER.password})
                .expect(200)
                .then(response => {
                    response.headers['set-cookie'].should.not.be.undefined();
                });
        });

        it('should return 200 for forth user', () => {
            const VALID_USER = USERS[3];

            return request
                .post(`${API_PREFIX}/users/login`)
                .send({email: VALID_USER.email, password: VALID_USER.password})
                .expect(200)
                .then(response => {
                    console.log(response.headers);
                    response.headers['set-cookie'].should.not.be.undefined();
                });
        });
    });

    describe('/jobs', () => {
       it('should return 200 and RnD jobs for first user', () => {
           const RND_JOBS = OPEN_JOBS.filter(job => job.department === DEPARTMENTS.RND);

           return request
               .get(`${API_PREFIX}/users/jobs`)
               .set('Cookie', ['_user_session=j%3A%7B%22email%22%3A%22a%40joonko.co%22%7D'])
               .expect(200)
               .then(response => {
                   const {jobs} = response.body;
                   jobs.length.should.be.equal(RND_JOBS.length);
               });
       });

        it('should return 200 and marketing jobs for second user', () => {
            const MARKETING_JOBS = OPEN_JOBS.filter(job => job.department === DEPARTMENTS.MARKETING);

            return request
                .get(`${API_PREFIX}/users/jobs`)
                .set('Cookie', ['_user_session=j%3A%7B%22email%22%3A%22b%40joonko.co%22%7D'])
                .expect(200)
                .then(response => {
                    const {jobs} = response.body;
                    jobs.length.should.be.equal(MARKETING_JOBS.length);
                });
        });

        it('should return 200 and product jobs for third user', () => {
            const PRODUCT_JOBS = OPEN_JOBS.filter(job => job.department === DEPARTMENTS.PRODUCT);

            return request
                .get(`${API_PREFIX}/users/jobs`)
                .expect(200)
                .set('Cookie', ['_user_session=j%3A%7B%22email%22%3A%22c%40joonko.co%22%7D'])
                .then(response => {
                    const {jobs} = response.body;
                    jobs.length.should.be.equal(PRODUCT_JOBS.length);
                });
        });

        it('should return 200 and all jobs for forth user', () => {
            return request
                .get(`${API_PREFIX}/users/jobs`)
                .expect(200)
                .set('Cookie', ['_user_session=j%3A%7B%22email%22%3A%22d%40joonko.co%22%7D'])
                .then(response => {
                    const {jobs} = response.body;
                    jobs.length.should.be.equal(OPEN_JOBS.length);
                });
        });

        it('should return 401 for unauthorized user', () => {
            return request
                .get(`${API_PREFIX}/users/jobs`)
                .expect(401)
        });
    });
});