
const inquirer=require('inquirer');
const fs=require('fs');
const { isBooleanObject } = require('util/types');


/* 
Individual Inquirer Module pront created with following questions:
*/


const prompt=inquirer.createPromptModule();

prompt(

    [{
        //Validate user enters a Project Title
        type:'input',
        message:"Enter the name of your project ?",
        name:'projectTitle',
        validate:(answers)=>{
            return !answers?"Please Enter a Project Title":true; 
        }
    },
    {
        //This will prompt the editor so that user can enter multiline paragraph

        type:'editor',
        message:`Describe your  Project :
        -What was your motivation?
        -Why did you build this project?
        -What problem does it solve?
        -What did you learn?`,
        name:'projectDescription'
    },
    {
        //Confirms if the user want a table of content in teh README

        type:'confirm',
        message:"Do you want to add Table Of Contents to the READ ME?",
        name:'wantTableOfContent',

    },

    //Seperator used within the choice list
    {   
        type:'checkbox',
        message:"Choose the content/topics that you need add to the READ ME?",
        name:'contentList',
        default:'Screenshots', 
        choices:[
            new inquirer.Separator("Choose from Below"),'Installation','Usage','Credits','License',
            new inquirer.Separator("Choose to Add more sections : "),'Tests','Questions','How to Contribute'], 

    },  
    {
        //Only If user choose installation from the choice list  below question will be asked to the user

        type:'editor',
        message:"Enter the installation details for the project?",
        name:'Installation',
        when:(
            answers=>answers.contentList.includes('Installation')
             )
    },
    {
       
        //Only If user choose usgae from the choice list  below question will be asked to the user

        type:'editor',
        message:"Enter the usage information for the project?",
        name:'Usage',
        when:(
                answers=>answers.contentList.includes('Usage')
             )
    },
    {
       
        //Only If user choose credits from the choice list  below question will be asked to the user

        type:'editor',
        message:"Enter the credits ?",
        name:'Credits',
        when:(
            answers=>answers.contentList.includes('Credits')
            )
    },
    {
     
        //Only if user choose license from the choice list below question will be asked to the user
        type:'list',
        message:"Enter your license info",
        name:'License',
        default:'UNLICENSE',
        choices:[
                '{"GNU":"[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"}',
                '{"BSD":"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"}',
                '{"MOZILLA":"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"}',
                '{"MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}',
                '{"APACHE":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}',
                '{"ECLIPSE":"[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"}',
                '{"IBM":"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"}',
                '{"ZLIB":"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"}'
                ],
        when:(
            answers=>answers.contentList.includes('License')
            )
    },
   
    {
             
        //Only if user choose How to Contribute from the choice list below question will be asked to the user
        type:'editor',
        message:"Specify how to contribute to the project",
        name:'How to Contribute',
         when:(
            answers=>answers.contentList.includes('How to Contribute')
            ),
     
    },
    {
             
        //Only if user choose Test from the choice list below question will be asked to the user
       
        type:'editor',
        message:"Enter the related test info for the project",
        name:'Tests',
         when:(
            answers=>answers.contentList.includes('Tests')
            ),
     
    } ,  
    {
             
        //Only if user choose Questions from the choice list below question will be asked to the user
        //Validates user enter a github username
        type:'input',
        message:"Enter Github Username for sharing your github profile with users/contributors? ",
        name:'Questions',
         when:(
            answers=>answers.contentList.includes('Questions')
            ),
         validate:(answer =>  answer.length===0?"Enter a valid Github Username ":true)   
     
    }   

    ,{
        //Only if the user chose Questions,this question will be prompted to enter the email id
        //Validate email id uding Regex /^[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-zA-Z]{2,3}$/ 
        //Verify if the email contains @,. and alphanumeric characters

        type:'input',
        message:"Enter the email address to contact you for further queries ",
        name:'Extra Questions',
        when:(
            answers=>answers.contentList.includes('Questions')
            ),
        validate:(input)=>{
                             return !input.match(/^[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-zA-Z]{2,3}$/)?"Enter a valid email address":true;
                          }

    }


])
.then(answers=>{
    //Manipulate the answers entered by user before writing it to an md file

    let answerString="\n";

    //Project Title
    let projectTitle=answers.projectTitle.toUpperCase() +"<br>"+"\n";

    answerString=answerString+"# "+projectTitle;

    //Project Description
    let projectDescHeading="### PROJECT DESCRIPTION"+"<br>"+"\n";
    let projectDescription=projectDescHeading+answers.projectDescription.trim()+"<br><br>";
    answerString+=projectDescription+"<br>"+"\n";

   
    //Table Of Content
    /* Created Table Of Content with the content list chosen by user */
    if(answers.wantTableOfContent){

        answerString+="#### TABLE OF CONTENT"+"<br>"+"\n";
        let tableOfContent="\n";
        for(let index=0;index<answers.contentList.length;index++){

            // tableOfContent+="<li>"+answers.contentList[index]+"</li>"+"<br>"
            tableOfContent+=`*  [${answers.contentList[index]}](#${answers.contentList[index].split(" ").join("-").toLowerCase()})`+"\n"
        }
      
        answerString+=tableOfContent+"<br><br>"+ "\n";
    }

    //Iterate through all the content chosen by user and display the heading and its content
    
    let profileEmailString="";
    answers.contentList.forEach(element => {

        
        //Checks if the element is license if then add badge to top of readme
        //anchor element added to link table of content with content data

        if(element==="License"){
         
            //For License ,badge is added to beginning of answer string and license name in the content
            let obj=JSON.parse(answers[element]);
            for(licenseName in obj){
                answerString=`${obj[licenseName]} `+"<br><br>"+answerString+"\n"+`<a name="${element.toLowerCase()}"></a>`+"\n"+"#### "+`${element.toUpperCase()} \n Distributed under the ${licenseName} License. See LICENSE.txt for more information.`+"\n"+"<br><br>"+"\n"
            }
           
        }
        else if(element==="Questions"){

            //For Question,fetches the github username and email id and populaed under Questions

            profileEmailString+=`<a name="${element.toLowerCase()}"></a>`+"\n"+"####  "+`${element.toUpperCase()}`+"\n"+"<br>"+"\n"+
                                `For any queries reach out to the following email:`+"\n"+"<br>"+"\n\n"+
                                `GitHub profile :  [Github Profile](https://github.com/${answers[element]})`+"\n"+"<br>"+"\n"+
                                `Email : ${answers['Extra Questions']} `+"\n";
            
            answerString+=profileEmailString+"\n"+"<br>";
        }
        else{

            answerString+=`<a name="${element.split(" ").join("-").toLowerCase()}"></a>`+"\n"+"####  "+`${element.toUpperCase()}`+` \n\n ${answers[element]} `+"<br><br>"+"\n"
        }       
        


    });


    fs.writeFile('README_TEMPLATE.md',answerString,(error)=>error ? console.log(error):console.log("Written Succesfully to READ ME"));
    
}

).catch(error=>console.log(error))

