const mongoose= require('mongoose');
const { isStringTextContainingNode } = require('typescript');
const CvSchema = new mongoose.Schema({
            firstname: {
                type: String
            },
            lastname: {
                type: String
            },
            email: {
                type: String
            },
            phone: {
                type: String
            },
            linkedin: {
                type: String
            },
            about: {
                type: String
            },
           university: {
                type: String,
                trim: true
            },
            universityYear:{
                type: Date
            },
            universityLoc: {
                type: String,
                trim: true
            },
            school: {
                type: String,
                trim: true
            },
            schoolYear:{
                type: Date
            },
            schoolLoc:{
                type: String,
                trim: true,
            },
            educExptitle: {
                type: String,
                trim: true
            },
            educExpyear:{
                type: Date
            },
            educExpdescription:{
                type: String,
                trim: true
            },
            educExptitleTwo: {
                type: String,
                trim: true
            },
            educExpyearTwo:{
                type: Date
            },
            educExpdescriptionTwo:{
                type: String,
                trim: true
            },
            techExptitle: {
                type: String,
                trim: true
            },
            techExpinstOrg: {
                type: String,
                trim: true
            },
            techExpyear:{
                type: Date
            },
            techExpdescription:{
                type: String,
                trim: true
            },
            techExplocation:{
                type: String,
                trim: true
            },
            
            techExptitleTwo: {
                type: String,
                trim: true
            },
            techExpinstOrgTwo: {
                type: String,
                trim: true
            },
            techExpyearTwo:{
                type: Date
            },
            techExpdescriptionTwo:{
                type: String,
                trim: true
            },
            techExplocationTwo:{
                type: String,
                trim: true
            },
            langname: {
                type: String
            },
            langlevel:{
                type: String
            },
            langnameTwo: {
                type: String
            },
            langlevelTwo:{
                type: String
            },
            skills: [{
                title: {
                    type: String,
                    trim: true
                } 
            }  
            ],
            jobId:{
                type: String,
            },
    });
module.exports = Cv = mongoose.model('cv', CvSchema);
