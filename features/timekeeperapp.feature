@timekeeperapp
Feature: TimeKeeper Application

@timekeeperlogin
Scenario: Login to TimeKeeper App

    Given I open TimeKeeper Static Pages
    When I go to Login
    Then Login form exists
    Then Username field exists
    Then Type username in username field
    Then Password field exists
    Then Type password in password field
    When you fill the login form
    Then You log in

@timekeeperdashboard
Scenario: TimeKeeper Application Dashboard

    Then Dashboard exists
    Then Navigation to Databases exists
    Then Database dropdown exists
@timekeeperdatabases
Scenario: TimeKeeper Database 
    Then navigation to Employees exists
    Then I click on Employees to get table
    Then Employees table exists
    Then Navigation to Databases exists again
    Then Database dropdown exists again
    Then navigation to Customers exists
    Then I click on Customers to get table
    Then Customers table exists
    Then Again navigation to Database dropdown menu exists
    Then Database dropdown menu exists
    Then navigation to Projects exists
    Then I click on Projects to get table
    Then Projects table exists
    Then Again there is Database menu navigation
    Then Again there is Database dropdown
    Then there is navigation to Teams
    Then I click on Teams
    Then There is Teams carrousel
    Then There is scroll through carrousel
    Then I click on scroll
    Then there is Foxtrot Team
    Then there is info about Foxtrot

@timekeeperreports
Scenario: TimeKeeper Reports
    Then navigation to Reports exists
    Then I click on Reports to get dropdown
    Then I click on TimeTracking Reports
    Then TimeTracking Report exist
    Then I click on Reports
    Then There is dropdown menu
    Then I click on Teams Report
    Then Teams Reports exists
    Then I click on dropdown
    Then dropdown exists
    Then I click on Monthly Reports
    Then Monthly Reports exists
    Then again I click on dropdown
    Then again dropdown exists