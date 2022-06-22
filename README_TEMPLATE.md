[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br><br>
# US WEATHER FORECAST DASHBOARD<br>
### PROJECT DESCRIPTION<br>
This is US specific weather forecast dashboard as country code is not being usedin API call and even if the same city exist in multiple states ,only one from the search is picked

User is presented with a search box and button to search for city name and additional option to clear search history. When user enter the city name and click Search,verifies if the city name is not empty using isValid() Verifies if city is not already part of local storage and only if not creates a new button with city name and add to search history Also displays current and 5 day weather forecast. As per documentation,used the updated One call API and geocoding API ,first to fetch coordinates with city name and then to search with coordinates for weather details.

When user clicks on buttons on search history ,only one API call happens with coordinates to get updated weather data When user clicks on Clear search histor,local storage is cleared and UI is updated<br><br><br>
#### TABLE OF CONTENT<br>

*  [Installation](#installation)
*  [Usage](#usage)
*  [Credits](#credits)
*  [License](#license)
*  [Tests](#tests)
*  [Questions](#questions)
*  [How to Contribute](#how-to-contribute)
<br><br>
<a name="installation"></a>
####  INSTALLATION 

 For installing and setting up the app follow the steps


Get a free API Key at https://example.com
Clone the repo
git clone https://github.com/your_username_/Project-Name.git
Install NPM packages
npm install
Enter your API in config.js
const API_KEY = 'ENTER YOUR API';
 <br><br>
<a name="usage"></a>
####  USAGE 

 LOREM IPSUM GENERATOR
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 <br><br>
<a name="credits"></a>
####  CREDITS 

 Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

Choose an Open Source License
GitHub Emoji Cheat Sheet
Malven's Flexbox Cheatsheet
Malven's Grid Cheatsheet
Img Shields
GitHub Pages
Font Awesome

 <br><br>

<a name="license"></a>
#### LICENSE 
 Distributed under the MIT License. See LICENSE.txt for more information.
<br><br>
<a name="tests"></a>
####  TESTS 

 LOREM IPSUM GENERATOR
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 <br><br>
<a name="questions"></a>
####  QUESTIONS
<br>
For any queries reach out to the following email:
<br>

GitHub profile :  [Github Profile](https://github.com/simmypayyappillyvarghese)
<br>
Email : simmyvarghese5@gmail.com 

<br><a name="how-to-contribute"></a>
####  HOW TO CONTRIBUTE 

 Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
 <br><br>
