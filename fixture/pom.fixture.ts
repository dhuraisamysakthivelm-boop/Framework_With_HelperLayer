import { Page, test, expect } from '@playwright/test';
import { HomePageHelper } from '../helper/HomePage_helper';
import { LoginPageHelper } from '../helper/LoginPage_helper';
import { BasicConfig } from "../test.config"
import testdata from '../data/testdata.json';

export let homepagehelper: HomePageHelper
export let loginpagehelper: LoginPageHelper
export let basicconfig: BasicConfig

test.beforeEach("Run this test before all the testcases", async ({ page }) => {
    homepagehelper = new HomePageHelper(page)
    loginpagehelper = new LoginPageHelper(page)
    basicconfig = new BasicConfig
    // await page.goto(basicconfig.appUrl)
});

export { testdata };
