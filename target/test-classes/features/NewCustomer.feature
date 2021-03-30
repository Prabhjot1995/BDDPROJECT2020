@NewCustomer
Feature: verify Techfios Add Cutomer oage
Background:
Given User is on techfios login page
Scenario Outline:User should able to add new customer
When User enters "<username>" and "<password>"
And User clicks on signin button
Then User lands on dashboard page
Then User clicks on customers 
Then User clicks on add new customer
And User enters "<firstname>" and "<company>" and "<email>" and "<phone>" and "<address>" and "<city>" and "<state>" and "<zip>" and "<country>" 
Then User clicks on sumbit button

Examples:
|username         |password|firstname  |company         |email           |phone |address        |city    |state|zip  |country                |
|demo@techfios.com|abc123  |salman khan|Personal Company|salman@gmail.com|123456|555 khan street|New York|PA   |19999|Virgin Islands, British|