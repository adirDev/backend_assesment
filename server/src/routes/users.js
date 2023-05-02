const { json } = require('body-parser');
const express = require('express');
const {OPEN_JOBS} = require('../constants/jobs');
const USERS = require('../constants/users');

const router = express.Router();

router.post('/login', async (req,res)=> {
    const email = req.body.email
    const password = req.body.password

    const domain = email.split('@').pop()

    //validate it's a joonko email domain
    if (domain !== "joonko.co"){
        return res.status(401).json({error: 'user email does not contains joonko\'s domain'})
    }

    let userObj = USERS.find(user => user.email === email)
 
    //validate that user found and password matches
    if (!userObj){
        return res.status(404).json({error: 'user not found'}) 
    }

    if(password !== userObj.password){
        return res.status(401).json({error: 'wrong password'})
    }

    res.status(200).cookie("_user_session", JSON.stringify({email})).json({ok: true})
})

router.get('/jobs', async (req,res)=> {
    const session = req.cookies ? req.cookies._user_session : undefined

    if (!session){
        return res.status(401).json({error: 'cookies does not exist'}) 
    }

    const userEmail = JSON.parse(session).email
    const userObj = USERS.find(user => user.email === userEmail) 

    if (!userObj){
        return res.status(401).json({error: 'user not found'}) 
    }

    let jobs = []
    let userDepartments = userObj.departments
    userDepartments.forEach(department => {
        let departmentjobs = OPEN_JOBS.filter(jobDepartment =>
            jobDepartment.department === department    
        )

        departmentjobs.forEach( job => jobs.push(job))
    })

    res.status(200).json({jobs})
})

module.exports = router;