package cucumberTesting;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;


public class StepDefinition {

    protected WebDriver driver;

    @Before
    public void setup() { driver = new ChromeDriver();}

    @Given("^I open Dashboard$")
    public void open_dash() {
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        driver.get("localhost:8080");
    }

    @Then("^There should be a submit button")
    public void see_submit() {
        WebElement submitButton = driver.findElement(By.id("table"));
        Assert.assertNotNull(submitButton);

        driver.close();
    }

    @After
    public void closeBrowser() { driver.quit();}
}
