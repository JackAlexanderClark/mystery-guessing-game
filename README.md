# README DOCUMENTATION

# **Milestone Project 2 - Interactive Frontend Development**

# Author: Jack Clark (Contact Me - jackalexanderclark@protonmail.com)

# Project website link (GitHub Pages): https://jackalexanderclark.github.io/mystery-guessing-game/index.html

## Website Device Mockup
![3-devices-black](https://user-images.githubusercontent.com/97599832/216617427-a2814925-0c9e-4459-a972-7d0ab0215c42.png)

## Contents:
<ol>
  <li>Project Goals and Planning</li>
  <li>(UX) User Experience</li>
  <li>Development and Features</li>
  <li>Testing and Bugs</li>
  <li>Deployment</li>
  <li>Credits</li>
</ol>
<hr>

# I) Project Goals and Planning

![image](https://user-images.githubusercontent.com/97599832/216454104-be44cc1b-f261-412f-a7bc-b091f2cc3cf2.png)
1. In designing this web app project, I was inspired by classical text RPG games that originated from the 1970's and 80's, with titles such as 1976 Cave Adventurer and Zork I: The Great Underground Empire in 1980. These games utilised text based mechanics and player interactions with their computers to tell a story and allow the user to input meaningful choices - before the days of 3D rendered graphics we have today. This game will be a user input experience where they can explore different areas of the website, with the added interactive elements created with javaScript.

2. For this project I decided upon a guessing game as a foundation, that would allow user inputs and ability to interact with different areas of the project. However, I wanted to expand upon this with added complexity and a more in-depth story. The game is inspired by the board game Cluedo and to get an aesthetically pleasing layout I commision some artwork to be produced for the characters in the game (Artist: Jamie Preston). I wanted the players to look like a playing card to bring that trading card game/board game to life, as seen below; ![image](https://user-images.githubusercontent.com/97599832/212542303-b60b7be1-4f68-4a37-becc-c9d197ef0983.png)

3. One of the main javascript features I wanted to use was exploring and interacting with elements to learn more information and details towards the game. Clicking to expand paragraphs and navigate was a key goal.

4. My first plan as can be seen in this basic wireframe (Using Figma) to broadly display my webpage layout, with distinct character cards stacked up as if the user were playing a cardgame.
![image](https://user-images.githubusercontent.com/97599832/214305597-e1ce96c0-da73-454e-98bb-a566f293bab5.png)


# II) (UX) User Experience
<ol>Goals</ol>
<ul>
    <li>To immediately understand the premise of the game and website.</li>
    <li>To be able to play the game and easily navigate between the 3 page sections.</li>
    <li>To be able to navigate between the bottom and top of pages and to the other areas without getting confused or lost.</li>
    <li>To have a clear and intuitive interface that makes it easy for the user to start playing the number guessing game</li>
    <li>To receive immediate feedback whether you were correct or incorrect and to see how many guesses you've used.</li>
</ul>

# III) Development and Features
1. To add interactivity to my game, the user is encourage to navigate and explore the web app by using the navigation bar to explore the other web pages, such as the clues page. From here users can click to learn more about each individual piece of information, utilising jQuery to expand and close text information pertaining to said piece of evidence.

![image](https://user-images.githubusercontent.com/97599832/214308815-8f1801be-2d3e-47d7-a2d1-394ee34d6ec9.png)

2. Secondly, I made use of Bootstrap as a template to handle responsiveness for all devices such as mobiles, ipads as well as desktop. Bootstrap classes such as "img-fluid" and "containers" help to keep a consistent flow and design philosophy throughout the project. I also used bootstrap modal popups for interactivity, 

![image](https://user-images.githubusercontent.com/97599832/214308690-cb8c9eec-51de-425d-9d3e-dbaa3266a2d5.png)

![image](https://user-images.githubusercontent.com/97599832/226474497-86996bae-8c89-42a8-a7da-2c7ff0f2e26e.png)

![image](https://user-images.githubusercontent.com/97599832/214308934-2e2cc5f3-5ba2-4fb0-8359-e2f02304f197.png)

3. I originally wanted to design a question and answer section within "clues.html" as seen below. It would utilise AJAX however, I later removed it as I found it to be scruffy and not particularly aesthetically pleasing.

![image](https://user-images.githubusercontent.com/97599832/220933440-1cde1ac4-cfa7-4d6c-b0ba-e79ecd241db3.png)

4. To add to the interactive elements, I have used BootStrap modals which bring up a fact sheet and allow the user to click outisde of the modal pop up to close it.

![image](https://user-images.githubusercontent.com/97599832/226204335-89deab70-9957-4d4d-856f-937046f73935.png)

5. Users can input an integer answer to the HTML submit box, this will then be evaluated in the javaScript game logic. A div is then populated with information such as what guess and whether the user is correct or not.
![image](https://user-images.githubusercontent.com/97599832/226471550-0550ce89-d2af-4e3d-9517-defe0f87ebc1.png)

6. Furthermore, a HTML table will be generated with each guess, recording which character you chose and the outcome.
![image](https://user-images.githubusercontent.com/97599832/226471914-9579d0ce-5c4c-49e3-847b-b7a7c1a7127b.png)

<ul>
<li>(Main Page) Rules and Game page</li>
    
    ![image](https://user-images.githubusercontent.com/97599832/216768559-0b54d65d-9750-42fc-a0a4-ab4f307bf9d0.png)
    
    <li>The function of this page is to introduce the guessing game and ruleset.</li>
    <li>Playes can choose a number between 1 to 9 that will represent the character and press submit to use guess and choose to see if they were correct or not.</li>

<li>Character Card Page</li>
    
    ![image](https://user-images.githubusercontent.com/97599832/216768807-02456a64-1286-4534-86e6-bac77d8fbd45.png)
    
    <li>Here there are nine character cards that have a fact sheet button, when the user presses it will create a bootstrap modal popup.</li>
    <li>

<li>Clues Page</li>
    
![image](https://user-images.githubusercontent.com/97599832/216768807-02456a64-1286-4534-86e6-bac77d8fbd45.png)
    
    <li>Each clue has a button that will toggle to reveal information that can be shown or hidden whenever the user wishes to interact with it.</li>
</ul>

<ul>Stylings:
    <li>I used "Bookman Old Style" as the primary font family.</li>
    <li>Colours: Black/Grey to resemble a chalkboard.</li>
</ul>


# IV) Testing and Bugs
1. To help develop and test the app, I used the javaScript testing framework - jest.
![image](https://user-images.githubusercontent.com/97599832/216416741-59a3ed6b-326c-4751-a633-384082398b9c.png)

2. During the development process I was working on a local storage system. However, it was removed during the project as it felt superfluous to the projects aims and didn't add value and may have contributed to user confusion. Also login systems would not be used in localStorage as they are not safely stored, furthermore I will be working on login systems in project 3 and 4.
![image](https://user-images.githubusercontent.com/97599832/217255520-57aab574-dc46-4071-85f6-2ff928448480.png)



## W3Schools HTML Validator - Nu HTML
### Page 1 - Index.html
<ul>
        <img src="https://user-images.githubusercontent.com/97599832/220934072-13499e8a-3a8a-4f48-99fb-d3402e6ca44c.png">
    <li>Remove spaces for link path and remove alt text.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221002916-1d87cf51-af6d-4358-b471-c674420be4b2.png">
    <li>Add the chalkboard background image via CSS {background-image} rather than HTML body tag.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221003537-d95f730f-348d-4f8e-87b3-487bbec135dc.png">
    <li>Used incorrect px to display pixels when just the number is necessary.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221004003-e0e1027d-a8d2-4f9e-9fc1-67b15c504a0f.png">
        <img src="https://user-images.githubusercontent.com/97599832/221005691-34b31d7c-d8ac-4764-80f0-e652147dc2ba.png">
    <li>Use of the "main" html tag is redundant.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221006363-1a024497-92fc-4216-b566-da4c92cfcd6d.png">
    <li>These two above errors are again due to incorrect path, need to remove spaces in src. Also remove % from width and height of images as uncessary.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221006668-83f12448-97d9-4413-8d89-e9b147af65eb.png">
    <li>Remove stray div tag.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221007221-bd45eaee-934a-4b5e-8518-c2bea9900e03.png">
    <li>Incorrect order of heading tags within table headings, need to re-write.</li>
    
    ![image](https://user-images.githubusercontent.com/97599832/228576950-e1c6a683-194a-48d3-a27e-7e07536c29d9.png)
    
    - After fixes.
![image](https://user-images.githubusercontent.com/97599832/228582586-f65b8499-bf4f-48c8-b502-57dee97b9d40.png)



</ul>

### Page 2 - Gamepage.html
#### Nu HTML W3Schools Validator: https://validator.w3.org/nu/
<ul>
        <img width="876" alt="image" src="https://user-images.githubusercontent.com/97599832/221055046-af799824-18d6-4a98-8d5f-e4d9b2f5d556.png">
    <li>Duplicate body tag needed removing.</li>
        <img width="868" alt="image" src="https://user-images.githubusercontent.com/97599832/221055388-22af21d6-b5bd-4c72-b9d6-5010996af1bb.png">
    <li>Same error as previous html page, with spaces in the source path for the image.</li>
        <img width="865" alt="image" src="https://user-images.githubusercontent.com/97599832/221055511-9df80767-410d-41ec-8b43-c06417cdd043.png">
    <li>Wrong order of descendants, need to refactor.</li>
        <img width="879" alt="image" src="https://user-images.githubusercontent.com/97599832/221055638-e8f533c8-c26f-46cc-a0fe-640613e39ae4.png">
    <li>Same issue with spaces in image path source, need to rename images.</li>
        <img width="879" alt="image" src="https://user-images.githubusercontent.com/97599832/221056002-c0d686c5-4137-4569-ad4e-62604743ece0.png">
    <li>Stray tags that need removing</li>
</ul>

- After fixes:
![image](https://user-images.githubusercontent.com/97599832/228617432-0044fa43-e1a3-4680-a66d-79db44007f55.png)

### Page 3 - Clues.html
#### Nu HTML W3Schools Validator: https://validator.w3.org/nu/
![image](https://user-images.githubusercontent.com/97599832/226192388-6a2654dc-9404-4714-905a-045ef06fcc66.png)
<ul>
    <li>Fatal Error: Duplicate body tags.</li>
</ul>

- After fixes:
![image](https://user-images.githubusercontent.com/97599832/228587247-43c35715-ddcb-496f-909c-fc36b771144d.png)


### CSS Validator - Jigsaw Validator: https://jigsaw.w3.org/css-validator/validator
![image](https://user-images.githubusercontent.com/97599832/228544227-a161e20d-772c-49ba-b7f4-98bcba5643e5.png)


### javaScript Validator: JSHint: https://jshint.com/
#### File 1: game.js
##### Part 1)
![image](https://user-images.githubusercontent.com/97599832/226191611-faa8c390-2d88-4654-95d7-da26e49db0dc.png)
##### Part 2)
![image](https://user-images.githubusercontent.com/97599832/226191870-e8cdeb90-c567-4941-9f3f-aa5941df3141.png)

<ul>
    <li>Need to remove 2 unused variables and 1 undefined variable.</li>
    <li>Need to rework the use of ES6 syntax.</li>
</ul>

#### File 2: effects.js
![image](https://user-images.githubusercontent.com/97599832/228542467-0694ea44-e65d-411a-90a6-a0b30bc440c7.png)

- No JavaScript Errors in console: 
![image](https://user-images.githubusercontent.com/97599832/228579340-f9c204d1-0adf-4b70-b670-46ed65a8c103.png)


#### Lighthouse Perfomance Testing.
![image](https://user-images.githubusercontent.com/97599832/228554993-c0d1597a-c060-4ac5-9173-bf12fe12d416.png)

- Page is slow loading due to javascript source dependancies, in response I added the defer attribute so they load after other DOM elements have rendered.

![image](https://user-images.githubusercontent.com/97599832/228567569-72880580-067b-4246-957a-f4e9627eb364.png)



### Manual Testing Examples using Jest: https://jestjs.io/
This is an example of using Jest to test some of the interactive elements such as a HTML checkbox. The test explains the process and expect is where we state the outcome we intend, if this fails we can then identify there is an issue with the code.
![image](https://user-images.githubusercontent.com/97599832/226964695-b11f1435-c3b6-46bb-8042-264617d603ff.png)


### Bugs
#### 1. Effects.js - Toggle Clues not Working
![image](https://user-images.githubusercontent.com/97599832/226174732-e9f1803f-e8db-4c28-91a6-ab320a2b904f.png)
The html textbox is shown by default when it needs to be hidden, then clicking the button will show. 

![image](https://user-images.githubusercontent.com/97599832/226174779-e99c09ee-0a9b-4bfb-a2fb-544a085d6c23.png)

-Solution: 
<br>
- The solution was to use a document ready function so the textbox is hidden only once the other elements have been hidden.
![image](https://user-images.githubusercontent.com/97599832/228607392-e28b2975-56e6-447d-b462-b67d69c34987.png)


#### 2. Gamepage.html - Fact Sheet Bootstrap Modal not working when clicked.
![image](https://user-images.githubusercontent.com/97599832/226176595-0372a075-a69a-4d5c-b5b2-dd49d57a3e51.png)
Investigating this bug I checked Chome Developer Tools and saw an error for bootstrap missing a jQuery CDN link.

Before Fix:
![image](https://user-images.githubusercontent.com/97599832/226177103-3f6e4eae-b2b3-48f8-8b05-ac8403cdfad5.png)

After Fix: 
![image](https://user-images.githubusercontent.com/97599832/226177132-00eaf5c1-f939-481b-ad21-baa72a02a6ad.png)

#### 3. Index.html - Text Paragraphs overlapping when collapsing for smaller view port widths
![image](https://user-images.githubusercontent.com/97599832/226184422-938c4a21-7b22-4722-ac07-0fef3c922b8a.png)

- To fix this I decided to use a Bootstrap template for the homepage rather than custom HTML and CSS styling to make sure it was responsive.

## VI) Deployment
<ul>
    <li>This project was built using the GitPod IDE.</li>
    <li>A test server is run using "python3 -m http.server" in the terminal.</li>
    <li>It was deployed as a static application on GitHub pages.</li>
    <li>You can clone a copy of the repository using Git Clone.</li>
</ul>

## VII) Credits
1. Jack Clark - Code 
2. Jamie Preston - Commisioned art work of the nine suspects drawings.
3. DALLE-2 - Artwork
4. GetBootstrap Templates; Album and Product. Source: "https://getbootstrap.com/docs/4.6/examples/album/", "https://getbootstrap.com/docs/4.6/examples/product/".
5. W3Schools - Sticky Navigation Bar Code. Source: "https://www.w3schools.com/howto/howto_js_navbar_sticky.asp"
