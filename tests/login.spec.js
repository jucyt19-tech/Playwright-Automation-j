import{test,expect} from '@playwright/test'
import{Loginpage} from '../pages/loginpage.js'
const testdata=require('../utils/testingdata.json')

test.beforeEach('Click on Login link before each test',async({page})=>{
    const login=new Loginpage(page)
    await login.gotourl()
    await expect(page.locator('//html[@lang="en"]')).toBeVisible()
    await login.clickloginlink()
    await expect(page.getByRole('dialog',{name:'Log in'})).toBeVisible()
})
//  3. Verify login with valid credentials 
test('03 Login with valid username and password',async({page})=>{
    const login=new Loginpage(page)
    await login.loginusernamepassword(testdata[0].username,testdata[0].password)
    await login.clickloginbutton()  
    await expect(page.locator('#nameofuser')).toHaveText(/Welcome/)
})

//  4. Verify login with invalid username and valid password 
test('04 Login with Invalid username and valid password',async({page})=>{
    const login=new Loginpage(page)
    await login.loginusernamepassword(testdata[1].invalidusername,testdata[0].password)
    await login.clickloginbutton()     
    page.on('dialog',async dialog =>{
                expect(dialog.message()).toBe('Wrong password.')
                await dialog.accept()
                                    })
    await expect(page.getByRole('dialog',{name:'Log in'})).toBeVisible()
})

//  5. Verify login with valid username and invalid password 
test('05 Login with valid username and Invalid password',async({page})=>{
    const login=new Loginpage(page)
    await login.loginusernamepassword(testdata[0].username,testdata[1].invalidpassword)
    await login.clickloginbutton()     
    page.on('dialog',async dialog =>{
                expect(dialog.message()).toBe('Wrong password.')
                await dialog.accept()
                                    })
    await expect(page.getByRole('dialog',{name:'Log in'})).toBeVisible()
})

//  6. Verify login with invalid username and invalid password 
test('06 Login with invalid username and password ',async({page})=>{
    const login=new Loginpage(page)
    await login.loginusernamepassword(testdata[1].invalidusername,testdata[1].invalidpassword)
    await login.clickloginbutton()     
    page.on('dialog',async dialog =>{
                expect(dialog.message()).toBe('Wrong password.')
                await dialog.accept()
                                    })
    await expect(page.getByRole('dialog',{name:'Log in'})).toBeVisible()
})

//  10. Login with valid credentials -> Logout 
test('07 Login and Logout',async({page})=>{
    const login=new Loginpage(page)
    await login.loginusernamepassword(testdata[0].username,testdata[0].password)  
    await login.clickloginbutton()  
    await expect(page.locator('#nameofuser')).toHaveText(/Welcome/)
    await page.locator('#logout2').click()
    await expect(page.getByRole('link',{name:'Log in'})).toHaveText('Log in')
})