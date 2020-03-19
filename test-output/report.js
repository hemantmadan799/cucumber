$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM application Test",
  "description": "",
  "id": "freecrm-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#With Examples keyword"
    }
  ],
  "line": 4,
  "name": "validate HomePage and create Contact",
  "description": "",
  "id": "freecrm-application-test;validate-homepage-and-create-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user opens browser and launches url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on FirstPage and click LoginButton",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user login to application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate logged in user name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters the \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user hit save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "freecrm-application-test;validate-homepage-and-create-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 18,
      "id": "freecrm-application-test;validate-homepage-and-create-contact;;1"
    },
    {
      "cells": [
        "hrmadan799@gmail.com",
        "Qualitest@1",
        "Ajay",
        "Kumar"
      ],
      "line": 19,
      "id": "freecrm-application-test;validate-homepage-and-create-contact;;2"
    },
    {
      "cells": [
        "hrmadan799@gmail.com",
        "Qualitest@1",
        "Pawan",
        "Gupta"
      ],
      "line": 20,
      "id": "freecrm-application-test;validate-homepage-and-create-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "validate HomePage and create Contact",
  "description": "",
  "id": "freecrm-application-test;validate-homepage-and-create-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user opens browser and launches url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on FirstPage and click LoginButton",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user login to application with \"hrmadan799@gmail.com\" and \"Qualitest@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate logged in user name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters the \"Ajay\" and \"Kumar\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user hit save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser_and_launches_url()"
});
formatter.result({
  "duration": 15385577000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_FirstPage_and_click_LoginButton()"
});
formatter.result({
  "duration": 4122607800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hrmadan799@gmail.com",
      "offset": 32
    },
    {
      "val": "Qualitest@1",
      "offset": 59
    }
  ],
  "location": "HomePageSteps.user_login_to_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 523947600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 31667600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_user_name()"
});
formatter.result({
  "duration": 1136459500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.click_on_Contacts_link()"
});
formatter.result({
  "duration": 739458500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.click_on_New_button()"
});
formatter.result({
  "duration": 247351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ajay",
      "offset": 17
    },
    {
      "val": "Kumar",
      "offset": 28
    }
  ],
  "location": "HomePageSteps.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 1349289800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_hit_save_button()"
});
formatter.result({
  "duration": 83801500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.close_the_browser()"
});
formatter.result({
  "duration": 3005834800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validate HomePage and create Contact",
  "description": "",
  "id": "freecrm-application-test;validate-homepage-and-create-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user opens browser and launches url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on FirstPage and click LoginButton",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user login to application with \"hrmadan799@gmail.com\" and \"Qualitest@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate logged in user name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters the \"Pawan\" and \"Gupta\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user hit save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser_and_launches_url()"
});
formatter.result({
  "duration": 14385151800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_FirstPage_and_click_LoginButton()"
});
formatter.result({
  "duration": 3727477400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hrmadan799@gmail.com",
      "offset": 32
    },
    {
      "val": "Qualitest@1",
      "offset": 59
    }
  ],
  "location": "HomePageSteps.user_login_to_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 656688900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 11968400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_user_name()"
});
formatter.result({
  "duration": 1654201300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.click_on_Contacts_link()"
});
formatter.result({
  "duration": 194432100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.click_on_New_button()"
});
formatter.result({
  "duration": 311089700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pawan",
      "offset": 17
    },
    {
      "val": "Gupta",
      "offset": 29
    }
  ],
  "location": "HomePageSteps.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 1385204000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_hit_save_button()"
});
formatter.result({
  "duration": 87324500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.close_the_browser()"
});
formatter.result({
  "duration": 2978141900,
  "status": "passed"
});
});