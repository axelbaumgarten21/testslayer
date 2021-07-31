import { wantedspecs } from "./wantedspecs";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities,  WebElement, By } from "selenium-webdriver";
import { headersToString } from "selenium-webdriver/http";
import { Name } from "selenium-webdriver/lib/command";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new wantedspecs(driver);

const submitButton: By = By.xpath("//*[@id= 'saveBtn']");
const clearButton: By = By.xpath("//*[@id= 'clearBtn']");

// Jira Test plan located here: https://dmutah.atlassian.net/browse/AB4DL-33

jest.setTimeout(500000)

test("can enter only required fields and get expected result", async () => {
    await page.navigate();
    await page.enterheader("Not top priority");
    await page.entermke("IBM");
    await page.enteroai("MegaMille");
    await page.entername("Duffy Mcflugel");
    await page.entersex("M");
    await page.enterrace("W");
    await page.enterheight("510");
    await page.enterweight("175");
    await page.enterhair("Gray");
    await page.enteroffense("Robbery")
    await page.enterdow("02202020");
    // await page.enterdlexpire("07052019");
    await driver.findElement(submitButton).click();
    expect(await page.getResults()).toContain("Not top priority.IBM.MegaMille.Duffy Mcflugel.M.W.510.175.Gray.Robbery.02202020......")
});

afterAll(async () => {
    await driver.quit();
  });
