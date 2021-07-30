import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

afterAll(async () => {
    await (await driver).quit()
})
jest.setTimeout(30000)
test('I can search Google', async () => {

    let searchBar = await (await driver).findElement(By.name('q'))
    await searchBar.sendKeys('wolverine\n')
    await (await driver).sleep(5000)

    searchBar = await (await driver).findElement(By.name('q'))
    await (await (await driver).findElement(By.name('q'))).clear()
    await searchBar.sendKeys('saturn\n')
    await (await driver).sleep(5000)
    
})