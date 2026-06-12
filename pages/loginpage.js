export class Loginpage{
    constructor(page){
        this.page=page
        this.loginlink=page.locator('#login2')
        this.loginusername=page.locator('#loginusername')
        this.loginpassword=page.locator('#loginpassword')
        this.loginbutton=page.getByRole('button',{name:'Log in'})
    }

    async gotourl(){
        await this.page.goto("https://demoblaze.com/")
    }

    async clickloginlink(){
        await this.loginlink.click()
    }

    async loginusernamepassword(username,password){
        await this.loginusername.fill(username)
        await this.loginpassword.fill(password)
    }

    async clickloginbutton(){
        await this.loginbutton.click()
    }

    async logintoapp(username,password){
        await this.page.goto("https://demoblaze.com/")
        await this.loginlink.click()
        await this.loginusername.fill(username)
        await this.loginpassword.fill(password)
        await this.loginbutton.click()
    }
}