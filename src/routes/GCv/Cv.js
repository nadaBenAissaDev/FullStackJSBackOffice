const express = require('express');
const router = express.Router();
const {check, validationResult}= require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Cv = require('../../models/Cv');

//@route Post api/cv
//@desc Create Cv to this job
//@access Private
router.post(
    '/addCv/:id',
    [
        auth,
        [
            check('phone', 'Phone required').not().isEmpty(),
            check('linkedin', ' Linkedin is required').not().isEmpty(),
            check('about', 'About you is required is required').not().isEmpty(),
            check('university', 'university required').not().isEmpty(),
            check('universityYear', 'university Year is required').not().isEmpty(),
            check('universityLoc', 'universityLoc  is required').not().isEmpty(),
            check('school', 'school is required').not().isEmpty(),
            check('schoolYear', 'schoolYear is required').not().isEmpty(),
            check('schoolLoc', 'schoolLoc is required').not().isEmpty(),
            check('educExptitle', 'educExptitle is required').not().isEmpty(),
            check('educExpyear', 'educExpyear is required').not().isEmpty(),
            check('educExpdescription', 'educExpdescription is required').not().isEmpty(),
            check('techExptitle', 'techExptitle is required').not().isEmpty(),
            check('techExpinstOrg', 'techExpinstOrg is required').not().isEmpty(),
            check('techExpyear', 'techExpyear is required').not().isEmpty(),
            check('techExpdescription', 'techExpdescription is required').not().isEmpty(),
            check('techExplocation', 'techExplocation is required').not().isEmpty(),
            check('langname', 'langname is required').not().isEmpty(),
            check('langlevel', 'langlevel is required').not().isEmpty(),
            check('skills', 'skills is required').not().isEmpty(),
        ]
    ],
async(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
    //recuperer job
    const job= await Job.findById(req.params.id);
    const jobId= job.id;
    //récupérer le user connecté à partir un token
    const user = await User.findById(req.user.id).select('-password');
    if (user.role != 2){
        return res.status(401).json({msg: 'User not autorized'});
    }
    //créer un nouveau CV
    const newCv= new Cv({
        //personnalInfo
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: req.body.phone,
        linkedin: req.body.linkedin,
        about: req.body.about,
        //education
        university: req.body.university,
        universityYear: req.body.universityYear,
        universityLoc: req.body.universityLoc,
        school: req.body.school,
        schoolYear: req.body.schoolYear,
        schoolLoc: req.body.schoolLoc,
        //educationExperience
        educExptitle: req.body.educExptitle,
        educExpyear: req.body.educExpyear,
        educExpdescription: req.body.educExpdescription,
        educExptitleTwo: req.body.educExptitleTwo,
        educExpyearTwo: req.body.educExpyearTwo,
        educExpdescriptionTwo: req.body.educExpdescriptionTwo,
        //technical experience
        techExptitle: req.body.techExptitle,
        techExpinstOrg: req.body.techExpinstOrg,
        techExpyear: req.body.techExpyear,
        techExpdescription: req.body.techExpdescription,
        techExplocation: req.body.techExplocation,
        techExptitleTwo: req.body.techExptitleTwo,
        techExpinstOrgTwo: req.body.techExpinstOrgTwo,
        techExpyearTwo: req.body.techExpyearTwo,
        techExpdescriptionTwo: req.body.techExpdescriptionTwo,
        techExplocationTwo: req.body.techExplocationTwo,
        //language
        langname: req.body.langname,
        langlevel: req.body.langlevel,
        langnameTwo: req.body.langnameTwo,
        langlevelTwo: req.body.langlevelTwo,
        
        skills: req.body.skills,
        jobId: jobId,
    }); 
    //save
    cv= await newCv.save();
    res.send(cv);

}
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }    
});
module.exports = router;
