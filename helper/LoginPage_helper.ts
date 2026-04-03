import {Page, expect} from "@playwright/test"
import {BasePage} from "../pages/BasePage"
import { LoginPage } from "../pages/LoginPage"

export class LoginPageHelper{
    page: Page;
    basepage: BasePage;
    loginpage: LoginPage;

    constructor(page:Page){
        this.page = page;
        this.basepage = new BasePage(page)
        this.loginpage = new LoginPage(page)
    }

    async verifyLoginPage(){
        const message = await this.basepage.getText(await this.loginpage.returnLocatorVerifyLogin())
        await expect(message).toContain("Login to your account")
    }

    async enterEmailAddress(email:string){
        await this.basepage.fillinput(await this.loginpage.returnlocaterEmailAddress(),email)
    }

    async enterPassword(password:string){
        await this.basepage.fillinput(await this.loginpage.returnLocatorPassword(), password)
    }

    async clickLoginButton(){
        await this.basepage.clickButton(await this.loginpage.returnLocatorLoginButton())
    }
}