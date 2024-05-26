const assert = require('assert')

describe('Open Kasir Aja', () =>{
    it('should open browser dan resirect to kasiraja.com', async () => {
        //Buka browser dan url
        await browser.url('/')

        const currentURL = await browser.getUrl();
        const expectedURL = 'https://kasirdemo.belajarqa.com/login';

        await assert.strictEqual(currentURL, expectedURL, 'URL tidak sesuai. Actual : ${currentURL}, Expected : ${expectedURL}');

    })
})