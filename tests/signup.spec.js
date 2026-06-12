import{test,expect} from '@playwright/test'
import{Signuppage} from '../pages/signuppage.js'
const testdata=require('../utils/testingdata.json')

test.beforeEach('Click on signup link before each test',async({page})=>{
    const signup=new Signuppage(page)
    await signup.gotourl()
    await expect(page.locator('//html[@lang="en"]')).toBeVisible()
    await signup.clicksignuplink()
    await expect(page.locator('#signInModalLabel')).toHaveText("Sign up")
    await signup.enterusernamepassword(testdata[0].username,testdata[0].password)
})
//1. Sign Up -> Enter Data -> Click Sign Up 
test('01 Signup as new user',async({page})=>{
    const signup=new Signuppage(page)
    await signup.clicksignupbutton()
    page.on('dialog',async dialog =>{
                expect(dialog.message()).toBe('Sign up successful.')
                await dialog.accept()
                                    })
    await expect(page.locator('//html[@lang="en"]')).toBeVisible()
})

//2. Sign Up -> Enter Data -> Click Close 
test('02 Signup and close ',async({page})=>{
    const signup=new Signuppage(page)
    await signup.clickclosebutton()
    await expect(page.getByRole('link',{name:'Sign up'})).toBeVisible()
})