const Page = require('../pages/page')
const LoginPage = require('../pages/login.page')
const DashboardPage = require('../pages/dashboard.page')
const loginPage = require('../pages/login.page')

describe('Kasir Aja Login Test', () => {
    beforeEach(async () => {
        //open browser
        Page.open('/')
    })

    it('should login failed with invalid user', async () => {
    // Panggil fungsi login
    await LoginPage.login('Invalidemail@gmail.com','123456789');

    //inventory
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })

    it('should login failed with invalid password', async () => {
    // Panggil fungsi login
    await LoginPage.login('sukintem@gmail.com','123456780');

    //assection error message
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })

    it('should login sucessfull', async () => {
    // Panggil fungsi login
     await LoginPage.login('sukintem@gmail.com','123456789');
       
    //assection error message
    await DashboardPage.assertDashboardUrl();
    })
})