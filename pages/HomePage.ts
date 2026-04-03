import {Page, Locator} from "@playwright/test"

export class HomePage{

    private readonly page: Page;
   
    
    constructor(page:Page){
        this.page = page;
    }        
    
        async returnVerifyHomePage1(){
            return this.page.locator('div').nth(1)
        }

        async returnVerifyHomePage2(){
            return this.page.locator('div').filter({ hasText: 'AutomationExercise Full-' }).nth(4)
        }

        async returnSignupLoginButton(){
            return this.page.getByRole('link', { name: ' Signup / Login' })
        }
}

