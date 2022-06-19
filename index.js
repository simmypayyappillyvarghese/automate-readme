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


const inquirer=require('inquirer');


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

    },
    {
        type:'confirm',
        message:"Do you want to add Table Of Contents ?",
        name:'wantTableOfContent',

    },
    {
        //This will be displayed only if user selects Y for table of contents and provide checklist to choose the content
        
        type:'checkbox',
        message:"What are the content/heading that you need to add to table of contents",
        name:'contentList',
        choices:['Installation','Usage','Credits','License'],
        when:(answers)=> answers.wantTableOfContent===true   
    },  
    {
        //If user select Y for table and the choice installation is selected,
        //only then this will be displayed else it is considered user doesnt want installation details in READ ME.
        //Also if user select N for table ,skips creating table  the question still will be displayed  to enter the installation details 
        //asuming user prefer it

        type:'input',
        message:"Enter the installation details for the project?",
        name:'installation',
        when:(answers=>{
            return (answers.wantTableOfContent && answers.contentList[0]=='Installation')|| !answers.wantTableOfContent ?true:false;
        })
    }

]
).then(data=>{
    console.log(data);
    console.log('# '+data.projectTitle);

    console.log('## '+data.projectDescription);
    
}

)



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