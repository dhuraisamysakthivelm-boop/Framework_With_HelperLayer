/*
Test Case 1: Place Order: Login before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Verify the "Login to your account" title
6. Fill email, password and click 'Login' button
*/

import { test } from '@playwright/test';
import { homepagehelper, loginpagehelper, testdata, basicconfig } from '../fixture/pom.fixture';

for (let data of testdata) {
    test('Test Case 1: Place Order: Login before Checkout', async ({ page }) => {       

        // Step1: Launch browser
        // Step2: Navigate to url 'http://automationexercise.com'
        await page.goto(basicconfig.appUrl)
        
        // Step3: Verify that home page is visible successfully
        await homepagehelper.verifyHomepage1()
        await homepagehelper.verifyHomepage2()

        // Step4: Click 'Signup / Login' button
        await homepagehelper.clickSignupLoginButton()

        // Step5: Verify the "Login to your account" title
        await loginpagehelper.verifyLoginPage()

        // Step6: Fill email, password and click 'Login' button 
        await loginpagehelper.enterEmailAddress(data.email)
        await loginpagehelper.enterPassword(data.password)
        await loginpagehelper.clickLoginButton()
    });
}