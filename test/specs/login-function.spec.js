const assert = require('assert')

//Menggunakan Function
async function login(username, password){
    // Buka URL
     await browser.url('/')

     // Masukin username (css locator)
     await $('//*[@id="email"]').setValue(username);
     //Masukin password (css locator)
     await $('//*[@id="password"]').setValue(password);
     //klik login
     await $('//*[@class="chakra-button css-1n8i4of"]').click();
}

describe('Kasir Aja Login Test', () =>{
    it('should login failed with invalid user', async () => {
        // Panggil fungsi login
        await login('invalid@gmail.com','123456789')

         //klik login
         await $('//*[@class="chakra-button css-1n8i4of"]').click();

        //inventory
        const errorMessage = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })

    it('should login failed with invalid password', async () => {
        //Buka browser dan url
        await login('sukintem@gmail.com','123456780')

         //klik login
         await $('//*[@class="chakra-button css-1n8i4of"]').click();

        //inventory
        const errorMessage = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })

    it('should login successfully with valid credentials', async () => {
        //Buka browser dan url
        await login('sukintem@gmail.com','123456789')

        //klik login
        await $('//*[@class="chakra-button css-1n8i4of"]').click();

        //inventory
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
    })
})