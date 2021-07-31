import { By, until, WebDriver } from "selenium-webdriver";
    export class wantedspecs {
        driver: WebDriver;
        url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
// Jira Test plan located here: https://dmutah.atlassian.net/browse/AB4DL-33

header: By = By.xpath("//*[@name= 'hdrInput']");
mke: By = By.xpath("//*[@name= 'mkeInput']");
oai: By = By.xpath("//*[@name= 'oriInput']");
name: By = By.xpath("//*[@name= 'namInput']");
sex: By = By.xpath("//*[@name= 'sexInput']");
race: By = By.xpath("//*[@name= 'racInput']");
height: By = By.xpath("//*[@name= 'hgtInput']");
weight: By = By.xpath("//*[@name= 'wgtInput']");
hair: By = By.xpath("//*[@name= 'haiInput']");
offense: By = By.xpath("//*[@name= 'offInput']");
dow: By = By.xpath("//*[@name= 'dowInput']");
dlexpire: By = By.xpath("//*[@name= 'olyInput']");
results: By = By.xpath("//*[@name= 'queryBody']");
fields: By = By.xpath("//*[@class= 'inputField']");
        

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.fields));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.fields))
    );
  }

  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async enterheader(text: string) {
    return this.sendKeys(this.header, `${text}`);
  }

  async entermke(text: string) {
    return this.sendKeys(this.mke, `${text}`);
  }

  // this next one below is Originating Agency Identifier
  async enteroai(text: string) {
    return this.sendKeys(this.oai, `${text}`);
  }

  async entername(text: string) {
    return this.sendKeys(this.name, `${text}`);
  }

  async entersex(text: string) {
    return this.sendKeys(this.sex, `${text}`);
  }

  async enterrace(text: string) {
    return this.sendKeys(this.race, `${text}`);
  }

  async enterheight(text: string) {
    return this.sendKeys(this.height, `${text}`);
  }

  async enterweight(text: string) {
    return this.sendKeys(this.weight, `${text}`);
  }

  async enterhair(text: string) {
    return this.sendKeys(this.hair, `${text}`);
  }

  async enteroffense(text: string) {
    return this.sendKeys(this.offense, `${text}`);
  }

//this next one below is date of warrant
  async enterdow(text: string) {
    return this.sendKeys(this.dow, `${text}`);
  }

  async enterdlexpire(text: string) {
    return this.sendKeys(this.dlexpire, `${text}`);
  }

  async getResults() {
    return this.getText(this.results);
  }
}