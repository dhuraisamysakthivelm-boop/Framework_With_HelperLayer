import { Page, Locator } from "@playwright/test"

export class BasePage{

    constructor(protected page:Page){}

    // method that convert string selector to locator
    protected getLocator(selector: string | Locator): Locator {
        return typeof selector === 'string' // if the selector is a string, convert it to a locator
            ? this.page.locator(selector) // if the selector is a string, convert it to a locator
            : selector; // if the selector is already a locator, return it as is
    }

    // Method to click buttons
    async goToUrl(path: string) {
        await this.page.goto(path);
    }

    // Fill the TextBox
    async fillinput(selector : Locator | string, value : string){
        const field = this.getLocator(selector)
        await field.fill(value)
    }

    // Click Button
    async clickButton(selector :Locator | string){
        const clickbutton = this.getLocator(selector)
        await clickbutton.click()
    }

    // get text from element
    async getText(selector : Locator | string){
        const element = this.getLocator(selector)
        return await element.textContent()
    }   

}