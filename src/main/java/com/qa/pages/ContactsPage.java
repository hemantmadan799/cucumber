package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class ContactsPage extends TestBase {
	@FindBy(xpath="(//button[@class='ui linkedin button'])[3]")
	WebElement btnNewContact;
	@FindBy(xpath="//div[@class='ui right corner labeled input']//input[@name='first_name']")
	WebElement txtFirstName;
	@FindBy(xpath="//label[text()='Last Name']/parent::div//input")
	WebElement txtLastName;
	@FindBy(xpath="//i[@class='save icon']")
	WebElement btnSave;
	
	public ContactsPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public void clickNewContactButton()
	{
		btnNewContact.click();
		
	}
	public void enterFirstAndLastName(String fname, String lname) throws InterruptedException
	{

		txtFirstName.sendKeys(fname);
		txtLastName.sendKeys(lname);
	}
	public void hitSaveContactButton()
	{
		btnSave.click();
		
	}
	
	
}
