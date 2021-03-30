package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Addcustomerpage extends BasePage {
	WebDriver driver;

	public Addcustomerpage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(xpath = "//span[text()='Customers']")
	WebElement CUSTOMERS_BUTTON;
	@FindBy(xpath = "//a[text()='Add Customer']")
	WebElement ADD_CUSTOMER_BUTTON;
	@FindBy(xpath = "//input[@id='account']")
	WebElement FULL_NAME;
	@FindBy(xpath = "//select[@id='cid']")
	WebElement COMPANY_NAME;
	@FindBy(xpath = "//input[@id='email']")
	WebElement EMIAL_FEILD;
	@FindBy(xpath = "//input[@id='phone']")
	WebElement PHONE_NUMBER_FEILD;
	@FindBy(xpath = "//input[@id='address']")
	WebElement ADDRESS_FEILD;
	@FindBy(xpath = "//input[@id='city']")
	WebElement CITY_FEILD;
	@FindBy(xpath = "//input[@id='state']")
	WebElement STATE_FEILD;
	@FindBy(xpath = "//input[@id='zip']")
	WebElement ZIP_CODE_FEILD;
	@FindBy(xpath = "//select[@id='country']")
	WebElement COUNTRY_DROPDOWN;
	@FindBy(xpath = "//button[@id='submit']")
	WebElement SUBMIT_BUTTON;

	public void abletoclickcustomersbutton() {
		waitForElement(driver, 5, CUSTOMERS_BUTTON);
		CUSTOMERS_BUTTON.click();

	}

	public void abletoclickaddcustomerbutton() {
		waitForElement(driver, 5, ADD_CUSTOMER_BUTTON);
		ADD_CUSTOMER_BUTTON.click();

	}

	public void name(String firstname, String company, String email, String phone, String address, String city,
			String state, String zip, String country) {
		int genNum = randomnumbers(999);
		waitForElement(driver,10,FULL_NAME);
		FULL_NAME.sendKeys(firstname + genNum);
		SelectDropDown(COMPANY_NAME, company);
		EMIAL_FEILD.sendKeys(genNum + email);
		PHONE_NUMBER_FEILD.sendKeys(phone + genNum);
		ADDRESS_FEILD.sendKeys(address);
		CITY_FEILD.sendKeys(city);
		STATE_FEILD.sendKeys(state);
		ZIP_CODE_FEILD.sendKeys(zip);
		SelectDropDown(COUNTRY_DROPDOWN, country);

	}

	public void save() {
		SUBMIT_BUTTON.click();
	}
}
