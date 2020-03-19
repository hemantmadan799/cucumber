package com.qa.pages;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase {
	
	public LoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//input[@name='email']")
	WebElement txtUserName;
	@FindBy(xpath="//input[@name='password']")
	WebElement txtPassword;
	@FindBy(xpath="//div[text()='Login']")
	WebElement btnSubmit;
	
	
	
	public HomePage login(String un, String pwd)
	{
		txtUserName.sendKeys(un);
		txtPassword.sendKeys(pwd);
		btnSubmit.click();
		return new HomePage();
	}

}
