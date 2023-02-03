# README DOCUMENTATION

# **Milestone Project 2 - Interactive Frontend Development**
# Author: Jack Clark (Contact Me - jackalexanderclark@protonmail.com)

# Project website link (GitHub Pages): https://jackalexanderclark.github.io/mystery-guessing-game/index.html

## Website Device Mockup
![3-devices-black](https://user-images.githubusercontent.com/97599832/216617427-a2814925-0c9e-4459-a972-7d0ab0215c42.png)

# I) Project Goals and Planning

![image](https://user-images.githubusercontent.com/97599832/216454104-be44cc1b-f261-412f-a7bc-b091f2cc3cf2.png)
1. In designing this web app project, I was inspired by classical text RPG games that originated from the 1970's and 80's, with titles such as 1976 Cave Adventurer and Zork I: The Great Underground Empire in 1980. These games utilised text based mechanics and player interactions with their computers to tell a story and allow the user to input meaningful choices - before the days of 3D rendered graphics we have today. This game will be a user input experience where they can explore different areas of the website, with the added interactive elements created with javaScript.

2. For this project I decided upon a guessing game as a foundation, that would allow user inputs and ability to interact with different areas of the project. However, I wanted to expand upon this with added complexity and a more in-depth story. The game is inspired by the board game Cluedo and to get an aesthetically pleasing layout I commision some artwork to be produced for the characters in the game. I wanted the players to look like a playing card to brinbg that trading card game/board game to life, as seen below; ![image](https://user-images.githubusercontent.com/97599832/212542303-b60b7be1-4f68-4a37-becc-c9d197ef0983.png)

3. One of the main javascript features I wanted to use was exploring and interacting with elements to learn more information and details towards the game. Clicking to expand paragraphs and navigate was a key goal.

4.

# II) Style, Themes and Planning.
1. My first plan as can be seen in this basic wireframe (Using Figma) to broadly display my webpage layout, with distinct character cards stacked up as if the user were playing a cardgame.
![image](https://user-images.githubusercontent.com/97599832/214305597-e1ce96c0-da73-454e-98bb-a566f293bab5.png)

2. I used "Bookman Old Style" as the primary font family.

# III) Development
1. To add interactivity to my game, the user is encourage to navigate and explore the web app by using the navigation bar to explore the other web pages, such as the clues page. From here users can click to learn more about each individual piece of information, utilising jQuery to expand and close text information pertaining to said piece of evidence.

![image](https://user-images.githubusercontent.com/97599832/214308815-8f1801be-2d3e-47d7-a2d1-394ee34d6ec9.png)

2. Secondly, I made use of Bootstrap as a template to handle responsiveness for all devices such as mobiles, ipads as well as desktop. Bootstrap classes such as "img-fluid" and "containers" help to keep a consistent flow and design philosophy throughout the project. I also used bootstrap modal popups for interactivity, 

![image](https://user-images.githubusercontent.com/97599832/214308690-cb8c9eec-51de-425d-9d3e-dbaa3266a2d5.png)

3. Thirdly, to expand upon user interaction, I included a basic local storage username mechanic where a user can input their chosen name or username along with a password that will be stored in their browsers local storage. There are name and password requirements that must be satisfied to continue. Once they have navigated through the game and have concluded on an answer they can go to submit their choice and the game will relay their name and whether or not they were correct with their choice. This choice will then remain if they chose to return to the game and give it a subsequent attempt. This will remain until the chose to clear their local storage sessions.

![image](https://user-images.githubusercontent.com/97599832/214308337-df6d7914-ffa1-4ad0-87f3-581c6c88bbd9.png)

4. Fourthly, I utilised some ajax functionality in which the user can click a html button which will return html data as a response from the ajax call. This was done to allow large text files to be stored neatly away in different folders rather than using large html files with hidden text. It helped to organise and maintain this project through out its development and helped add another element of interactivity to the game.

![image](https://user-images.githubusercontent.com/97599832/214308934-2e2cc5f3-5ba2-4fb0-8359-e2f02304f197.png)

## IV) Testing
1. To help develop and test the app, I used the javaScript testing framework - jest.
![image](https://user-images.githubusercontent.com/97599832/216416741-59a3ed6b-326c-4751-a633-384082398b9c.png)

## VI) Credits
1. Jack Clark - Code 
2. Jamie Preston - Commisioned art work of the nine suspects drawings.
3. DALLE-2 - Artwork
