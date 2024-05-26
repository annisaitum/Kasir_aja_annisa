const assert = require('assert')

describe('Kasir Aja Register Sucess', () =>{
    it('register with valid account', async () => {
        //Buka browser dan url
        await browser.url('/')
        
        await $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a').click();

         //masukin name (css locator)
         await $('//*[@id="name"]').setValue('starstoree');
         //masukin email (css locator)
         await $('//*[@id="email"]').setValue('star4@gmail.com');
         //masukin password (css locator)
         await $('//*[@id="password"]').setValue('1234567');
         //button register
         await $('//*[@id="root"]/div/div/div/div[2]/div/button').click();

         //message
        const Message = await $('//*[@class="chakra-alert__title css-tidvy5"]')
        await expect(Message).toHaveTextContaining('Toko berhasil didaftarkan')
         //*[@id="toast-4-title"]
         //*[@id="5"]/div/div[2]
    })

    it('register with invalid email', async () => {
        //Buka browser dan url
        await browser.url('/')
        
        await $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a').click();

         //masukin name (css locator)
         await $('//*[@id="name"]').setValue('starstoreee');
         //masukin email (css locator)
         await $('//*[@id="email"]').setValue('star3');
         //masukin password (css locator)
         await $('//*[@id="password"]').setValue('1234567');
         //button register
         await $('//*[@id="root"]/div/div/div/div[2]/div/button').click();

         //message
         const Message = await $('//*[@class="chakra-alert css-qwanz3"]')
         await expect(Message).toHaveTextContaining('"email" must be a valid email')
         //*[@id="toast-4-title"]
         //*[@id="5"]/div/div[2]
    })

    it('empaty password', async () => {
        //Buka browser dan url
        await browser.url('/')
        
        await $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a').click();

         //masukin name (css locator)
         await $('//*[@id="name"]').setValue('starstoree');
         //masukin email (css locator)
         await $('//*[@id="email"]').setValue('star1@gmail.com');
         //masukin password (css locator)
         await $('//*[@id="password"]').setValue('');
         //button register
         await $('//*[@id="root"]/div/div/div/div[2]/div/button').click();

         //message
        const Message = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(Message).toHaveTextContaining('"password" is not allowed to be empty')
         //*[@id="toast-4-title"]
         //*[@id="5"]/div/div[2]
    })
})