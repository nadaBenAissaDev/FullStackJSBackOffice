import Index from "backend/views/Index.js";
import Maps from "backend/views/examples/Maps.js";
import Tables from "backend/views/examples/Tables.js";
import Icons from "backend/views/examples/Icons.js";
//user
import UsersList from "backend/views/examples/UsersList.js";


//Job
import scraping from "backend/views/examples/scrapping";
import ListJobs from "backend/views/GJob/ListJobs";
import activatedJobs from "backend/views/GJob/activatedJobs";
import deactivatedJobs from "backend/views/GJob/deactivatedJobs";
import JobDetails from "backend/views/GJob/JobDetails";
import JobAdDetails from "backend/views/GJob/JobAdDetails";
import Ranking from "backend/views/GJob/ranking";
import PostJob from "backend/views/GJob/PostJob";
import ListJobsNonApp from "backend/views/GJob/ListJobsNonApp";
import UpdateJob from "backend/views/GJob/UpdateJob";
//Cv
import uploadCv from "backend/views/CvToText/UploadCv"

//Reclamation
import ListReclamations from "backend/views/GReclamation/ListReclamations.js"; 
import ReclamationDetails from "backend/views/GReclamation/ReclamationDetails.js";
import StatReclamation from "backend/views/GReclamation/StatReclamation.js";
import calendar from "backend/views/GCalendar/calendar.js"; 
import chat from "backend/views/Gchat/chat.js";
import ListReclamationstreated from "backend/views/GReclamation/ListReclamationstreated.js";
import ListReclamationsnontreated from "backend/views/GReclamation/ListReclamationsnontreated.js"; 
import ListReclamationsarchived from "backend/views/GReclamation/ListReclamationsarchived.js";
import ListReclamationsnonarchived from "backend/views/GReclamation/ListReclamationsnonarchived.js";

import Replay from "backend/views/GReclamation/Replay.js";



//Personality test
import personalityTestResults from "backend/views/GPersonalityTest/personalityTestResults";
import personalityTestList from "backend/views/GPersonalityTest/ListPersonalityTest";
import personalityTestDetail from "backend/views/GPersonalityTest/DetailsPersonalityTest";
import AddPersonalityTest from "backend/views/GPersonalityTest/AddPersonalityTest";
import AddHr from "backend/views/GUser/AddHr";
import Cv from "backend/views/Cv";

/// skills test 

import listetest from "backend/views/examples/skillstest/listtest";
import AddTest from "backend/views/examples/skillstest/AddnewTest";
import Questions from "backend/views/examples/skillstest/Questions";
import AddQuestion from "backend/views/examples/skillstest/AddQuestion";
import UpdateQuestion from "backend/views/examples/skillstest/UpdateQuestion";
import Result from "backend/views/examples/skillstest/Result";
import mail from "backend/views/examples/skillstest/mail";
import Profile from "backend/views/examples/Profile";
import listetestarchived from "backend/views/examples/skillstest/listtestarchived";
import UpdateProfile from "backend/views/examples/skillstest/updateProfile";
//  recommandation++++scraping
import Recommandation from "backend/views/GRecommandation/recommandationdetails";
import scrap from "backend/views/GScraping/scraping";







var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/UsersList",
    name: "UsersList",
    icon: "ni ni-circle-08 text-purple",
    component: UsersList,
    layout: "/admin",
  },
  {
    path: "/Cv",
    name: "Cv",
    component: Cv,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
   //job routes
   {
    path: "/ListJobs",
    name: "Jobs",
    icon: "ni ni-circle-08 text-pink",
    component: ListJobs,
    layout: "/admin",
  },
  {
    path: "/PostJob",
    name: "PostJob",
    component: PostJob,
    layout: "/admin",
  },
  {
    path: "/ListJobsNonApp",
    name: "List Jobs Non Approved",
    //icon: "ni ni-circle-08 text-pink",
    component: ListJobsNonApp,
    layout: "/admin",
  },
  {
    path: "/Ranking",
    name: "Ranking",
    component: Ranking,
    layout: "/admin",
  },
  {
    path: "/uploadCv",
    name: "Upload Cvs",
    icon: "ni ni-planet text-blue",
    component: uploadCv,
    layout: "/admin",
  },
  {
    path: "/scrapping",
    name: "scrapping",
    icon: "ni ni-planet text-blue",
    component: scraping,
    layout: "/admin",
  },
   {
    path: "/scrap",
    name: "scrap",
    icon: "ni ni-tv-2 text-primary",
    component: scrap,
    layout: "/admin",
  },

  
 
  {
    path: "/calendar",
    name: "calendar",
    icon: "ni ni-planet text-blue",
    component: calendar, 
    layout: "/admin",
  },
  //choucou
{
  path: "/ListReclamations",
  name: "ListReclamations",
  icon: "ni ni-planet text-blue",
  component: ListReclamations,
  layout: "/admin",
},
{
  path: "/ListReclamationstreated",
  name: "ListReclamationstreated",
 // icon: "ni ni-planet text-blue",
  component: ListReclamationstreated, 
  layout: "/admin",
},
{
  path: "/ListReclamationsnontreated",
  name: "ListReclamationsnontreated",
 // icon: "ni ni-planet text-blue",
  component: ListReclamationsnontreated,  
  layout: "/admin",
},
{
  path: "/ListReclamationsarchived",
  name: "ListReclamationsarchived",
 // icon: "ni ni-planet text-blue",
  component: ListReclamationsarchived, 
  layout: "/admin",
},
{
  path: "/ListReclamationsnonarchived",
  name: "ListReclamationsnonarchived",
 // icon: "ni ni-planet text-blue",
  component: ListReclamationsnonarchived, 
  layout: "/admin",
},
{
  path: "/Replay",
  name: "Replay",
  icon: "ni ni-planet text-blue",
  component: Replay, 
  layout: "/admin",
},
{
  path: "/chat",
  name: "chat",
  icon: "ni ni-planet text-blue",
  component: chat, 
  layout: "/admin",
},
  {
    path: "/personalityTestList",
    name: "Personality Test List",
    icon: "ni ni-spaceship text-red ",
    component: personalityTestList,
    layout: "/admin",
  },
  {
    path: "/personalityTestResults",
    name: "Personality Test Results",
    component: personalityTestResults,
    layout: "/admin",
  },  
  {
    path: "/listetest",
    name: "skills Test List",
    icon: "ni ni-trophy text-orange",
    component:  listetest,
    layout: "/admin",
  },

  {
    path: "/allquestions",
    name: "Skills Test Questions",
    component: Questions,
    layout: "/admin",
  },
  {
    path: "/listetestarchived",
    name: "skills Test archived List",
    component:  listetestarchived,
    layout: "/admin",
  },
  {
    path: "/recommandation" ,
    component: Recommandation,
    layout: "/admin",
  },
  
  {
    path: "/add",
    component: AddTest,
    layout: "/admin",
  },
  {
    path: "/ReclamationDetails",
    component: ReclamationDetails, 
    layout: "/admin",
  },
  
  
  {
    path: "/personalityTestDetail",
    component: personalityTestDetail,
    layout: "/admin",
  },
  {
    path: "/addPersonalityTest",
    component: AddPersonalityTest,
    layout: "/admin",
  },
  {
    path: "/addHr",
    component: AddHr,
    layout: "/admin",
  },

  //job not in sidebar
,
{
  path: "/jobDetails/:id", 
  //name: "Job Details",
  component: JobDetails,
  layout: "/admin",
},
{
  path: "/jobAdDetails/:id", 
  //name: "Job Details",
  component: JobAdDetails,
  layout: "/admin",
},
{
  path: "/activatedJobs",
  //name: "activatedJobs",
  component: activatedJobs,
  layout: "/admin",
},
{
  path: "/deactivatedJobs",
  //name: "deactivated Jobs",
  component: deactivatedJobs,
  layout: "/admin",
},
{
  path: "/updateJob",
  component: UpdateJob,
  layout: "/admin",
},


  ///////quiz skills 
  
 
  {
    path: "/send",
   component: mail,
    layout: "/admin",
  },
  {
    path: "/addquestion",
    component: AddQuestion,
    layout: "/admin",
  },
  {
    path: "/updatequestion",
    component: UpdateQuestion,
    layout: "/admin",
  },
  {
    path: "/update-profile",
    component: UpdateProfile,
    layout: "/admin",
  },
  {
    path: "/result/:testId" ,
    component: Result,
    layout: "/admin",
  },

];
export default routes;
