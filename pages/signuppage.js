export class Signuppage{
    constructor(page){
        this.page=page
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signuplink=page.locator('#signin2')
        this.signupbutton=page.getByRole('button',{name:'Sign up'})
        this.closebutton=page.getByRole('button',{name:'Close'}).nth(0)
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
}