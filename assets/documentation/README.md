# README DOCUMENTATION

# **Milestone Project 2 - Interactive Frontend Development**
# Author: Jack Clark (Contact Me - jackalexanderclark@protonmail.com)

# Project website link (GitHub Pages): https://jackalexanderclark.github.io/mystery-guessing-game/index.html

## Website Device Mockup
![3-devices-black](https://user-images.githubusercontent.com/97599832/216617427-a2814925-0c9e-4459-a972-7d0ab0215c42.png)

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

3. Thirdly, to expand upon user interaction, I included a basic local storage username mechanic where a user can input their chosen name or username along with a password that will be stored in their browsers local storage. There are name and password requirements that must be satisfied to continue. Once they have navigated through the game and have concluded on an answer they can go to submit their choice and the game will relay their name and whether or not they were correct with their choice. This choice will then remain if they chose to return to the game and give it a subsequent attempt. This will remain until the chose to clear their local storage sessions.

![image](https://user-images.githubusercontent.com/97599832/214308337-df6d7914-ffa1-4ad0-87f3-581c6c88bbd9.png)

4. Fourthly, I utilised some ajax functionality in which the user can click a html button which will return html data as a response from the ajax call. This was done to allow large text files to be stored neatly away in different folders rather than using large html files with hidden text. It helped to organise and maintain this project through out its development and helped add another element of interactivity to the game.

![image](https://user-images.githubusercontent.com/97599832/214308934-2e2cc5f3-5ba2-4fb0-8359-e2f02304f197.png)

5. I originally wanted to design a question and answer section within "clues.html" as seen below. It would utilise AJAX however, I later removed it as I found it to be scruffy and not particularly aesthetically pleasing.

![image](https://user-images.githubusercontent.com/97599832/220933440-1cde1ac4-cfa7-4d6c-b0ba-e79ecd241db3.png)

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
    <li>Colours: Black/Grey.</li>
</ul>


# IV) Testing and User Experience Stories
1. To help develop and test the app, I used the javaScript testing framework - jest.
![image](https://user-images.githubusercontent.com/97599832/216416741-59a3ed6b-326c-4751-a633-384082398b9c.png)

2. During the development process I was working on a local storage system. However, it was removed during the project as it felt superfluous to the projects aims and didn't add value and may have contributed to user confusion. Also login systems would not be used in localStorage as they are not safely stored, furthermore I will be working on login systems in project 3 and 4.
![image](https://user-images.githubusercontent.com/97599832/217255520-57aab574-dc46-4071-85f6-2ff928448480.png)

3. JS Hint testing my javaScript code for my game.js file.
![image](https://user-images.githubusercontent.com/97599832/217329216-4983b1f8-d855-41ca-994f-424209364bb7.png)


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
    <li>FIX FIX FIX</li>
        <img src="https://user-images.githubusercontent.com/97599832/221005691-34b31d7c-d8ac-4764-80f0-e652147dc2ba.png">
    <li>Use of the "main" html tag is redundant.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221006363-1a024497-92fc-4216-b566-da4c92cfcd6d.png">
    <li>These two above errors are again due to incorrect path, need to remove spaces in src. Also remove % from width and height of images as uncessary.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221006668-83f12448-97d9-4413-8d89-e9b147af65eb.png">
    <li>Remove stray div tag.</li>
        <img src="https://user-images.githubusercontent.com/97599832/221007221-bd45eaee-934a-4b5e-8518-c2bea9900e03.png">
    <li>Incorrect order of heading tags within table headings, need to re-write.</li>
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

## VI) Deployment
<ul>
    <li>This project was build using the GitPod IDE.</li>
    <li>It was deployed as a static application on GitHub pages.</li>
    <li>You can clone a copy of the repository using Git Clone.</li>
</ul>

## VII) Credits
1. Jack Clark - Code 
2. Jamie Preston - Commisioned art work of the nine suspects drawings.
3. DALLE-2 - Artwork