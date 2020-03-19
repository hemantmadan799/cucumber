package com.qa.pages;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class FirstPage extends TestBase{
	
	
	@FindBy(xpath="//span[text()='Log In']")
	WebElement btnLogin;
	
	public FirstPage() 
	{
		PageFactory.initElements(driver, this);
		
	}
	
	public LoginPage clickLogin()
	{
		btnLogin.click();
		return new LoginPage();
	}

}
