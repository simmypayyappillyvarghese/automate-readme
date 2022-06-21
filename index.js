/*
PSEUDO CODE

* Install inquirer and fs modules.
* Use inquirer prompt to get answers from the use
*use fs to write the response to the Readme.md file


# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write

*/


/*Question

Default value not displaying 
How to use transform
Validate ,description length not working with project description

*/

const inquirer=require('inquirer');
const fs=require('fs');
const { isBooleanObject } = require('util/types');

//NOTE: Transformer just display the 

/* 

Individual Inquirer Module pront created with following questions:
1)accepts the input as text and validates if user enter the mandatory fiels Project Title
2)Question accept the  project description input in an editor make it easier for user to enter  a multiline paragraph
3)Question checks/confirms with the User if they need a table of contents
4)If the user enter Y for table of content ,it will display a checklist for user to choose the contents for the table 
5)The questions following it will appear only for the content that was chosen by user from the checklist
6)If the user enter N for table of content,it will skip creating the table for READ ME .



*/



const prompt=inquirer.createPromptModule();

prompt(

    [{
        type:'input',
        message:"Enter the name of your project ?",
        name:'projectTitle',
        validate:(answers)=>{
            return !answers?"Please Enter a Project Title":true; 
        }
    },
    {
        type:'editor',
        message:`Describe your  Project :
        -What was your motivation?
        -Why did you build this project?
        -What problem does it solve?
        -What did you learn?`,
        name:'projectDescription'
    },
    {
        type:'confirm',
        message:"Do you want to add Table Of Contents to the READ ME?",
        name:'wantTableOfContent',

    },
    //Seperator used to indicate  the first half as the suggested bare minimum for the Read Me
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

        //TO DO
        type:'editor',
        message:"Enter the installation details for the project?",
        name:'Installation',
        when:(
            answers=>answers.contentList.includes('Installation')
             )
    },
    {
        //TO DO
        //Only If user choose usgae from the choice list  below question will be asked to the user

        type:'editor',
        message:"Enter the usage information for the project?",
        name:'Usage',
        when:(
                answers=>answers.contentList.includes('Usage')
             )
    },
    {
        //TO DO
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
        //TODO
        type:'editor',
        message:"Specify how to contribute to the project",
        name:'How to Contribute',
         when:(
            answers=>answers.contentList.includes('How to Contribute')
            ),
     
    },
    {
        //TO DO
        type:'editor',
        message:"Enter the related test info for the project",
        name:'Tests',
         when:(
            answers=>answers.contentList.includes('Tests')
            ),
     
    } ,  
    {
        type:'input',
        message:"Enter Github Username for sharing your github profile with users/contributors? ",
        name:'Questions',
         when:(
            answers=>answers.contentList.includes('Questions')
            ),
         validate:(answer =>  answer.length===0?"Enter a valid Github Username ":true)   
     
    }   

    ,{
        //Regex /^[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-zA-Z]{2,3}$/ will validate for the email address,Verf=ify if teh email contains @,. and alphanumeric characters

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


]
).then(answers=>{


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
            tableOfContent+=`*  [${answers.contentList[index]}](#${answers.contentList[index].toLowerCase()})`+"\n"
        }
      
        answerString+=tableOfContent+"<br><br>"+ "\n";
    }

    //Iterate through all the content chosen by user and display the heading and its content
    
    let profileEmailString="";
    answers.contentList.forEach(element => {

        console.log(element)
        //Checks if the element is license if then add badge to top of readme
        if(element==="License"){

            let obj=JSON.parse(answers[element]);
            for(licenseName in obj){
                answerString=`${obj[licenseName]} `+"<br><br>"+answerString+"\n"+`<a name="${element.toLowerCase()}"></a>`+"\n"+"#### "+`${element.toUpperCase()} \n\n\n\n ${licenseName}`+"\n"+"<br><br>"+"\n"
            }
           
        }
        else if(element==="Questions"){

           
            profileEmailString+=`<a name="${element.toLowerCase()}"></a>`+"\n"+"####  "+`${element.toUpperCase()}`+"\n"+"<br>"+"\n"+`GitHub profile :  [Github Profile](https://github.com/${answers[element]})`+"<br>"+"\n";
            profileEmailString+=`Email : ${answers['Extra Questions']} `+"<br>"+"\n";
            console.log(profileEmailString);
            answerString+=profileEmailString;
        }
        else{

            answerString+=`<a name="${element.toLowerCase()}"></a>`+"\n"+"####  "+`${element.toUpperCase()}`+` \n\n ${answers[element]} `+"<br><br>"+"\n"
        }       
        

    });

    console.log(answers);
    fs.writeFile('README_TEMPLATE.md',answerString,(error)=>error ? console.log(error):console.log("Written Succesfully to READ ME"));
    
    
}

).catch(error=>console.log(error))



/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project
and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, 
installation instructions,
 usage information, 
 contribution guidelines,
  and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README */

// let obj={"GNU":"[![License GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"};
// for(key in obj){

//     console.log(key);
//     console.log(obj[key]);
// }
