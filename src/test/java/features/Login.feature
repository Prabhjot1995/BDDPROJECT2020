@Login
Feature: verify Techfios login page
Background:
Given User is on techfios login page
Scenario Outline:User should able to log in with right information
When User enters "<username>" and "<password>"
And User clicks on signin button
Then User lands on dashboard page

Examples:
|username        |password|
|demo@techfios.com|abc123  |

