package com.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "./src/test/java/com/qa/features",
		glue = {"com.qa.stepDefinitions"},
		plugin =  {"pretty", "html:test-output","json:target/cucumber.json" },
		dryRun = false,
		monochrome = true)
public class TestRunner {

}

