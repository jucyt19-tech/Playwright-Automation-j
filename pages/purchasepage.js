export class Purchasepage{
    constructor(page){
        this.page=page,
        this.cartlink=page.locator('#cartur'),
        this.addtocartbutton=page.getByRole('link',{name:'Add to cart'})
        this.page=page,
        this.name=page.locator('#name'),
        this.country=page.locator('#country'),
        this.city=page.locator('#city'),
        this.card=page.locator('#card'),
        this.month=page.locator('#month'),
        this.year=page.locator('#year')
    }

    async clickcartlink(){
        await this.cartlink.click()
    }
    async clickaddtocartbutton(){
        await this.addtocartbutton.click()
    }
    async fillpurchaseform(name,country,city,card,month,year){
        await this.name.fill(name)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.card.fill(card)
        await this.month.fill(month)
        await this.year.fill(year)
    }
    
}