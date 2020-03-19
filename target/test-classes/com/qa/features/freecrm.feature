Feature: FreeCRM application Test

#With Examples keyword
Scenario Outline: validate HomePage and create Contact

Given user opens browser and launches url
When user is on FirstPage and click LoginButton
Then user login to application with "<username>" and "<password>"
Then validate home page title
Then validate logged in user name
Then click on Contacts link
Then click on New button
Then user enters the "<firstname>" and "<lastname>"
Then user hit save button
Then close the browser

Examples:
	|      username				|      password 	|	firstname	|	lastname 	|
	|	hrmadan799@gmail.com	|		Qualitest@1 |	Ajay		|	Kumar		|
	|	hrmadan799@gmail.com	|		Qualitest@1 |	Pawan		|	Gupta		|

	
	