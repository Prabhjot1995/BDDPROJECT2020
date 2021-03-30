package page;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(xpath = "//input[@id='username']")
	WebElement USERNAME;
	@FindBy(xpath = "//input[@id='password']")
	WebElement PASSWORD;
	@FindBy(xpath = "//button[text()='Sign in']")
	WebElement SIGNIN;

	public void logininfo(String username, String password) {
		USERNAME.sendKeys(username);
		PASSWORD.sendKeys(password);
	}

	public void Signin() {
		SIGNIN.click();
	}
	public void pagetitle() {
		Assert.assertEquals("Dashboard- iBilling", driver.getTitle());
	}
}
