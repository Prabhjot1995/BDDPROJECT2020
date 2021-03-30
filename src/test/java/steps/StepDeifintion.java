package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.Addcustomerpage;
import page.LoginPage;
import util.BrowserFactory;

public class StepDeifintion {
	WebDriver driver;
	LoginPage loginpage;
	Addcustomerpage add;

	@Before
	public void BeforeRun() {
		driver = BrowserFactory.Init();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		add = PageFactory.initElements(driver, Addcustomerpage.class);
	}

	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		loginpage.logininfo(username, password);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() {
		loginpage.Signin();
	}

	@Then("^User lands on dashboard page$")
	public void user_lands_on_dashboard_page() {
		loginpage.pagetitle();
	}

	@Then("^User clicks on customers$")
	public void user_clicks_on_customers() {
		add.abletoclickcustomersbutton();
	}

	@Then("^User clicks on add new customer$")
	public void user_clicks_on_add_new_customer() {
		add.abletoclickaddcustomerbutton();
	}

	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and_and_and_and_and_and_and(String firstname, String company, String email,
			String phone, String address, String city, String state, String zip, String country) {
		add.name(firstname, company, email, phone, address, city, state, zip, country);
	}

	@Then("^User clicks on sumbit button$")
	public void user_clicks_on_sumbit_button() {
		add.save();
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
