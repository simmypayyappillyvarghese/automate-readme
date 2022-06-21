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
        validate:(answer)=>{
            return !answer?"Please Enter a Project Title":true; 
        }
    },
    {
        type:'editor',
        message:`Describe your  Project :
        -What was your motivation?
        -Why did you build this project?
        -What problem does it solve?
        -What did you learn?`,
        name:'projectDescription',
        //Need to check/verify
        //validate:(answer => answer.projectDescription.length==0?"Please enter the Project Description":true)

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
            new inquirer.Separator("Choose to Add more sections : "),"User Story","Acceptance Criteria",
                                    "Links","Technologies Used","Screenshots",'Fearures','How to Contribute','Tests'], 

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
        message:"Enter the main features  of the project ?",
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
        choices:['GNU','BSD','CC','BSD','MOZILLA','MIT','BOOST','APACHE','ECLIPSE','ISC','IBM','HIPOCRATIC','ZLIB','OPEN HARDWARE','UNLICENSE'],
        when:(
            answers=>answers.contentList.includes('License')
            )
    },
    {
        type:'editor',
        message:"Enter the user story",
        name:'User Story',
         when:(
            answers=>answers.contentList.includes('User Story')
            )
    },
    {
        type:'editor',
        message:"Enter the acceptance criteria",
        name:'Acceptance Criteria',
         when:(
            answers=>answers.contentList.includes('Acceptance Criteria')
            ),
     
    },
    {
        type:'editor',
        message:"Enter the Links for Github Repo /Live Application",
        name:'Links',
         when:(
            answers=>answers.contentList.includes('Links')
            ),
     
    },
    {
        type:'editor',
        message:"Enter the Technologies used for the project",
        name:'Technologies Used',
         when:(
            answers=>answers.contentList.includes('Technologies Used')
            ),
     
    },
    {
        type:'editor',
        message:"Enter the project related screenshots :",
        name:'Screenshots',
         when:(
            answers=>answers.contentList.includes('Screenshots')
            ),
     
    },
    {
        type:'editor',
        message:"Specify the main features of this project",
        name:'Features',
         when:(
            answers=>answers.contentList.includes('Features')
            ),
     
    },
    {
        type:'editor',
        message:"Specify how to contribute to the project",
        name:'How to Contribute',
         when:(
            answers=>answers.contentList.includes('How to Contribute')
            ),
     
    },
    {
        type:'editor',
        message:"Enter the related test info for the project",
        name:'Tests',
         when:(
            answers=>answers.contentList.includes('Tests')
            ),
     
    }   

]
).then(answers=>{

    let answerString="";

    //Project Title
    let projectTitle="# "+ answers.projectTitle.toUpperCase() +"\n";
    answerString+=projectTitle;

    //Project Description
    let projectDescHeading="### "+"PROJECT DESCRIPTION  \n\n";
    let projectDescription=projectDescHeading+answers.projectDescription.trim()+"\n";
    answerString+=projectDescription+" \n";

   
    //Table Of Content
    /* Created Table Of Content with the content list chosen by user */
    if(answers.wantTableOfContent){

        answerString+="#### "+"TABLE OF CONTENT \n";
        let tableOfContent="<ol> \n";
        for(let index=0;index<answers.contentList.length;index++){

            tableOfContent+="<li>"+answers.contentList[index]+"</li> \n"
        }
        tableOfContent+="</ol> \n";
        answerString+=tableOfContent;
    }

    //Iterate through all the content chosen by user and display the heading and its content
   
    answers.contentList.forEach(element => {

        if(element==="License"){
            answers[element]="![Badge License](https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge)";
        }
        answerString+=`#### ${element.toUpperCase()} \n\n ${answers[element]} \n`

    });




    





    fs.writeFile('README_TEMPLATE.md',answerString,(error)=>error ? console.log(error):console.log("Written Succesfully to READ ME"));
    console.log(answers);
    
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