const { json } = require('body-parser');
const express = require('express');
const {OPEN_JOBS} = require('../constants/jobs');
const USERS = require('../constants/users');

const router = express.Router();

router.post('/login', async (req,res)=> {
    const email = req.body.email
    const password = req.body.password

    const domain = email.split('@').pop()

    //validate it's a joonko email domail - TODO: fix node:22105) UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    if (domain !== "joonko.co"){
        res.status(401).json({error: 'user email does not contains joonko\'s domain'})
        return
    }

    //validate that user found and password matches
    let userObj = USERS.find(user => user.email === email)
    console.log(userObj)
    if (!userObj){
        res.status(404).json({error: 'user not found'})
        return 
    }

    if(password !== userObj.password){
        res.status(401).json({error: 'wrong password'})
    }

    res.status(200).cookie("_user_session", JSON.stringify({email})).json({ok: true})
})

router.get('/jobs', async (req,res)=> {
    //TODO: wrap with try/catch
    const session = JSON.parse(req.cookies._user_session)
    console.log(session)
    //TODO: verify that user/session exist if not return status 401
   
    const userEmail = session.email

    let jobs = []
    let userDepartments = USERS.find(user => user.email === userEmail).departments
    userDepartments.forEach(department => {
        let departmentjobs = OPEN_JOBS.filter(jobDepartment =>
            jobDepartment.department === department    
        )

        departmentjobs.forEach( job => jobs.push(job))
    })

    res.status(200).json({jobs})
})

module.exports = router;