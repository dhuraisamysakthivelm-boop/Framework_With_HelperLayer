import {Page} from "@playwright/test"

export class LoginPage{
    private readonly page : Page;

    constructor(page:Page){
        this.page = page
    }

    async returnLocatorVerifyLogin(){
        return await this.page.getByRole('heading', { name: 'Login to your account', level: 2 });
    }

    async returnlocaterEmailAddress(){
        return await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    }

    async returnLocatorPassword(){
        return await this.page.getByRole('textbox', { name: 'Password' })
    }

    async returnLocatorLoginButton(){
        return await this.page.getByRole('button', { name: 'Login' })
    }


}