const { Builder, Capabilities, until } = require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const todoInput = "new-todo";
const todos = "All";
const todoLabel = "selected";
const todoComplete = "checkbox";
const clearCompletedButton = "clear completed";

test("the todo app can add, complete, and clear a todo", async () => {
  //locate site//
  await driver.get("https://devmountain.github.io/qa_todos/");
  //find input//
  await driver.wait(until.elementLocated(todoInput));
  //data input//
  await driver.findElement(todoInput).sendKeys("Test To-Do\n");

  let myTodos = await driver.findElements(todos);
  //click input//
  await (await myTodo[0].findElement(todoComplete)).click();
  //clear input//
  await (await driver.findElement(clearCompletedButton)).click();
});

afterAll(async () => {
  await driver.quit();
});
