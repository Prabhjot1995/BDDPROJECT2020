$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NewCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "verify Techfios Add Cutomer oage",
  "description": "",
  "id": "verify-techfios-add-cutomer-oage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewCustomer"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should able to add new customer",
  "description": "",
  "id": "verify-techfios-add-cutomer-oage;user-should-able-to-add-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User lands on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on customers",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on add new customer",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003cfirstname\u003e\" and \"\u003ccompany\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\" and \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on sumbit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-techfios-add-cutomer-oage;user-should-able-to-add-new-customer;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "company",
        "email",
        "phone",
        "address",
        "city",
        "state",
        "zip",
        "country"
      ],
      "line": 15,
      "id": "verify-techfios-add-cutomer-oage;user-should-able-to-add-new-customer;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "salman khan",
        "Personal Company",
        "salman@gmail.com",
        "123456",
        "555 khan street",
        "New York",
        "PA",
        "19999",
        "Virgin Islands, British"
      ],
      "line": 16,
      "id": "verify-techfios-add-cutomer-oage;user-should-able-to-add-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3468925800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDeifintion.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1150694300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should able to add new customer",
  "description": "",
  "id": "verify-techfios-add-cutomer-oage;user-should-able-to-add-new-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NewCustomer"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User lands on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on customers",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on add new customer",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"salman khan\" and \"Personal Company\" and \"salman@gmail.com\" and \"123456\" and \"555 khan street\" and \"New York\" and \"PA\" and \"19999\" and \"Virgin Islands, British\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on sumbit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDeifintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 356648500,
  "status": "passed"
});
formatter.match({
  "location": "StepDeifintion.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2087657200,
  "status": "passed"
});
formatter.match({
  "location": "StepDeifintion.user_lands_on_dashboard_page()"
});
formatter.result({
  "duration": 12428400,
  "status": "passed"
});
formatter.match({
  "location": "StepDeifintion.user_clicks_on_customers()"
});
formatter.result({
  "duration": 168901800,
  "status": "passed"
});
formatter.match({
  "location": "StepDeifintion.user_clicks_on_add_new_customer()"
});
formatter.result({
  "duration": 3743115000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salman khan",
      "offset": 13
    },
    {
      "val": "Personal Company",
      "offset": 31
    },
    {
      "val": "salman@gmail.com",
      "offset": 54
    },
    {
      "val": "123456",
      "offset": 77
    },
    {
      "val": "555 khan street",
      "offset": 90
    },
    {
      "val": "New York",
      "offset": 112
    },
    {
      "val": "PA",
      "offset": 127
    },
    {
      "val": "19999",
      "offset": 136
    },
    {
      "val": "Virgin Islands, British",
      "offset": 148
    }
  ],
  "location": "StepDeifintion.user_enters_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1864090800,
  "status": "passed"
});
formatter.match({
  "location": "StepDeifintion.user_clicks_on_sumbit_button()"
});
formatter.result({
  "duration": 88801200,
  "status": "passed"
});
formatter.after({
  "duration": 2594922300,
  "status": "passed"
});
});