import {Page, expect} from "@playwright/test"
import {BasePage} from "../pages/BasePage"
import { HomePage } from "../pages/homepage"  

export class HomePageHelper{
    homepage: HomePage;
    page:Page;
    basepage:BasePage

    constructor(page:Page){
        this.page = page
        this.homepage = new HomePage(page)
        this.basepage = new BasePage(page)
    }

    async verifyHomepage1(){
        await expect(await this.homepage.returnVerifyHomePage1()).toBeVisible()
    }

    async verifyHomepage2(){
        await expect(await this.homepage.returnVerifyHomePage2()).toBeVisible()
    }

    async clickSignupLoginButton(){
        // await this.homepage.returnSignupLoginButton()
        this.basepage.clickButton(await this.homepage.returnSignupLoginButton())
    }
}


