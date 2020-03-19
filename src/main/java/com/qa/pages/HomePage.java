package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class HomePage extends TestBase{
	
	@FindBy(xpath="//span[text()='Contacts']")
	WebElement lnkContacts;
	
	@FindBy(xpath="//span[text()='Hemant Madan']")
	WebElement lblUserName;
	
	public boolean verifyCorrectUserName()
	{
		return lblUserName.isDisplayed();
			
	}
	public void createContact()
	{
		lnkContacts.click();
	}
	public HomePage()
	{
		PageFactory.initElements(driver, this);
	}
	public String verifyHomePageTitle()
	{
		return driver.getTitle();
	}
	public ContactsPage clickContacts()
	{
		lnkContacts.click();
		return new ContactsPage();
	}
}
