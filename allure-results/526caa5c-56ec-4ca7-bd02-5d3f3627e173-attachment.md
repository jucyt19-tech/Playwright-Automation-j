# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> 01 Select product add to cart click ok
- Location: tests/purchase.spec.js:12:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoblaze.com/
Call log:
  - navigating to "https://demoblaze.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
    - generic [ref=e12]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e14]
```

# Test source

```ts
  1  | export class Loginpage{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.loginlink=page.locator('#login2')
  5  |         this.loginusername=page.locator('#loginusername')
  6  |         this.loginpassword=page.locator('#loginpassword')
  7  |         this.loginbutton=page.getByRole('button',{name:'Log in'})
  8  |     }
  9  | 
  10 |     async gotourl(){
  11 |         await this.page.goto("https://demoblaze.com/")
  12 |     }
  13 | 
  14 |     async clickloginlink(){
  15 |         await this.loginlink.click()
  16 |     }
  17 | 
  18 |     async loginusernamepassword(username,password){
  19 |         await this.loginusername.fill(username)
  20 |         await this.loginpassword.fill(password)
  21 |     }
  22 | 
  23 |     async clickloginbutton(){
  24 |         await this.loginbutton.click()
  25 |     }
  26 | 
  27 |     async logintoapp(username,password){
> 28 |         await this.page.goto("https://demoblaze.com/")
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoblaze.com/
  29 |         await this.loginlink.click()
  30 |         await this.loginusername.fill(username)
  31 |         await this.loginpassword.fill(password)
  32 |         await this.loginbutton.click()
  33 |     }
  34 | }
```