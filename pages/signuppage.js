export class Signuppage{
    constructor(page){
        this.page=page
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signuplink=page.locator('#signin2')
        this.signupbutton=page.getByRole('button',{name:'Sign up'})
        this.closebutton=page.getByRole('button',{name:'Close'}).nth(0)
        this.loginlink=page.locator('#login2')
        this.loginusername=page.locator('#loginusername')
        this.loginpassword=page.locator('#loginpassword')
        this.loginbutton=page.getByRole('button',{name:'Log in'})
    }

    async gotourl(){
        await this.page.goto("https://demoblaze.com/")
    }

    async clicksignuplink(){
         await this.signuplink.click()
    }
    async enterusernamepassword(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async clicksignupbutton(){
        await this.signupbutton.click()
    }

    async clickclosebutton(){
        await this.closebutton.click()
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