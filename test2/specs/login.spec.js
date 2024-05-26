const assert = require('assert')

describe('Kasir Aja Login Test', () =>{
    it('should login failed with invalid user', async () => {
        //Buka browser dan url
        await browser.url('/')

         //masukin username (css locator)
         await $('//*[@id="email"]').setValue('sukintem1@gmail.com');
         //masukin password (css locator)
         await $('//*[@id="password"]').setValue('123456789');
 
         //klik login
         await $('//*[@class="chakra-button css-1n8i4of"]').click();

        //inventory
        const errorMessage = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })

    it('should login failed with invalid password', async () => {
        //Buka browser dan url
        await browser.url('/')

         //masukin username (css locator)
         await $('//*[@id="email"]').setValue('sukintem@gmail.com');
         //masukin password (css locator)
         await $('//*[@id="password"]').setValue('123456780');
 
         //klik login
         await $('//*[@class="chakra-button css-1n8i4of"]').click();

        //inventory
        const errorMessage = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })

    it('should login successfully with valid credentials', async () => {
        //Buka browser dan url
        await browser.url('/')

        //masukin username (css locator)
        await $('//*[@id="email"]').setValue('sukintem@gmail.com');
        //masukin password (css locator)
        await $('//*[@id="password"]').setValue('123456789');

        //klik login
        await $('//*[@class="chakra-button css-1n8i4of"]').click();

        //inventory
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
    })
})