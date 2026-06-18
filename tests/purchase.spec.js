import{test,expect} from '@playwright/test'
import{Loginpage} from '../pages/loginpage.js'
import{Purchasepage} from '../pages/purchasepage.js'
const testdata=require('../utils/testingdata.json')

test.beforeEach('Login to application before each test',async({page})=>{
    const login=new Loginpage(page)
    await login.logintoapp(testdata[0].username,testdata[0].password) 
    await expect(page.locator('#nameofuser:visible')).toHaveText(/Welcome/)
})
//  7. Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup 
test('08 Select product add to cart click ok',async({page})=>{
    const login=new Loginpage(page)
    await page.getByRole('link',{name:'Nokia lumia 1520'}).click()
    await expect(page.getByRole('heading',{name:'Nokia lumia 1520'})).toBeVisible()
    const purchase=new Purchasepage(page)
    await purchase.clickaddtocartbutton()
    page.on('dialog',async dialog =>{
                    expect(dialog.message()).toBe('Product added.')
                    await dialog.accept()
    })
    await purchase.clickcartlink()
    await expect(page.getByText('Nokia lumia 1520')).toBeVisible()
})

//  8. Login with valid credentials -> Select a product under Phones->Add to Cart -> Click "ok" on the popup -> Add details -> Purchase 
test('09 Select product under phones and purchase',async({page})=>{
    const login=new Loginpage(page)
    await expect(page.getByText('Phones')).toBeVisible()
    await page.getByText('Phones').click()
    await page.getByRole('link',{name:'Samsung galaxy s6'}).click()
    await expect(page.getByRole('heading',{name:'Samsung galaxy s6'})).toBeVisible()
    const purchase=new Purchasepage(page)
    await purchase.clickaddtocartbutton()
    page.on('dialog',async dialog =>{
                    expect(dialog.message()).toBe('Product added.')
                    await dialog.accept()
    })
    await purchase.clickcartlink()
    await page.waitForSelector('.table-responsive:visible')
    await expect(page.getByRole('cell',{name:'Samsung galaxy s6'}).first()).toBeVisible()
    await page.getByRole('button',{name:'Place Order'}).click()
    await page.locator('#orderModal').waitFor({state:'visible'})
    await expect(page.locator('#orderModalLabel:visible')).toHaveText('Place order')
    await purchase.fillpurchaseform(testdata[2].name,testdata[2].country,testdata[2].city,
                                    testdata[2].card,testdata[2].month,testdata[2].year) 
    await page.getByRole('button',{name:'Purchase'}).click()
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible()
    await page.getByRole('button',{name:'OK'}).click()
})

//  9.  Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase 
test('10 Select product under Monitors and purchase ',async({page})=>{
    const login=new Loginpage(page)
    await expect(page.getByText('Monitors')).toBeVisible()
    await page.getByText('Monitors').click()
    await page.getByRole('link',{name:'Apple monitor 24'}).click()
    await expect(page.getByRole('heading',{name:'Apple monitor 24'})).toBeVisible()
    const purchase=new Purchasepage(page)
    await purchase.clickaddtocartbutton()
    page.on('dialog',async dialog =>{
                    expect(dialog.message()).toBe('Product added.')
                    await dialog.accept()
                                    })
    await purchase.clickcartlink()
    await page.waitForSelector('.table-responsive:visible')
    await expect(page.getByText('Apple monitor 24').first()).toBeVisible()
    await page.getByRole('button',{name:'Place Order'}).click()
    await page.locator('#orderModal').waitFor({state:'visible'})
    await expect(page.locator('#orderModalLabel:visible')).toHaveText('Place order')
    await purchase.fillpurchaseform(testdata[2].name,testdata[2].country,testdata[2].city,
                                    testdata[2].card,testdata[2].month,testdata[2].year)                               
    await page.getByRole('button',{name:'Purchase'}).click()
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible()
    await page.getByRole('button',{name:'OK'}).click()                               
})