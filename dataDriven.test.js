const { Builder, Capabilities, By, until } = require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const clickEmployee = require("../testAssets/clickEmployee");
const verifyEmployee = require("../testAssets/verifying");
const changeEmployee = require("../testAssets/changeEmployee");
const oldEmployees = require("../testAssets/oldEmployees");

beforeEach(async () => {
  await driver.get(
    "https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html"
  );
  await driver.wait(until.elementLocated(By.css("#noEmployee")));
});

afterAll(async () => {
  await driver.quit();
});

describe("Date Driven Employee Manager Tests", () => {
  it("Can verify the old employees", async () => {
    await clickEmployee(driver, oldEmployees[0].name);
    await verifyEmployee(
      driver,
      oldEmployees[0].name,
      oldEmployees[0].phone,
      oldEmployees[0].title
    );
  });
  /* to change each employee
it("can change all 10 employees", async () => {
  await clickEmployee(driver, oldEmployees[0].name)

  await changeEmployee(driver, "Snoop", "123456789", "Topp Dogg")
  await verifyEmployee(driver, "Snoop", "123456789", "Topp Dogg")

})*/
});
