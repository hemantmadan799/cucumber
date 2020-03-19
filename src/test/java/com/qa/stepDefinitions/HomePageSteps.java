package com.qa.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.qa.pages.ContactsPage;
import com.qa.pages.FirstPage;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageSteps extends TestBase {
	FirstPage objFirstPage;
	LoginPage objLoginPage;
	HomePage objHomePage;
	ContactsPage objContactsPage;
	

	@Given("^user opens browser and launches url$")
	public void user_opens_browser_and_launches_url() {
	   TestBase.initialization();
	}

	@When("^user is on FirstPage and click LoginButton$")
	public void user_is_on_FirstPage_and_click_LoginButton() {
		objFirstPage=new FirstPage();
		objLoginPage= objFirstPage.clickLogin();
	}

	@Then("^user login to application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_to_application_with_username_and_password(String username, String password) {
		objHomePage=objLoginPage.login(username, password);
       
    }
//	@Then("^user logs in to application$")
//	public void user_enters_username_and_password() {
//
//	}
	@Then("^validate home page title$")
	public void validate_home_page_title() {
		String homeTitle=objHomePage.verifyHomePageTitle();
		Assert.assertEquals("Cogmento CRM", homeTitle);
	}

	@Then("^validate logged in user name$")
	public void validate_logged_in_user_name()  {
		boolean flag=objHomePage.verifyCorrectUserName();
		Assert.assertTrue(flag);
	    
	}
	
	@Then("^click on Contacts link$")
	public void click_on_Contacts_link() {
		objContactsPage=objHomePage.clickContacts();
	}

	@Then("^click on New button$")
	public void click_on_New_button() {
		objContactsPage.clickNewContactButton();
	}

	@Then("^user enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_and(String fname, String lname) throws InterruptedException {
		objContactsPage.enterFirstAndLastName(fname, lname);
	}

	@Then("^user hit save button$")
	public void user_hit_save_button() {
		objContactsPage.hitSaveContactButton();
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws InterruptedException
	{
		Thread.sleep(2000);
		driver.quit();
	}
	
	
}
