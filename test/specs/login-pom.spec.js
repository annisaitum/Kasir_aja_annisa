const Page = require('../pages/page')
const LoginPage = require('../pages/login.page')
const DashboardPage = require('../pages/dashboard.page')
const loginPage = require('../pages/login.page')

describe('Login Test kasir aja', () => {
    beforeEach(async () => {
        //open browser
        Page.open('/')
    })

    it('login with invalid email', async () => {
    // Panggil fungsi login
    await LoginPage.login('invalid-email@gmail.com','Password1');

    //inventory
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })

    it('login with invalid password', async () => {
    // Panggil fungsi login
    await LoginPage.login('annisa@gmail.com','Password0');

    //assection error message
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })

    it('should login sucessfull', async () => {
    // Panggil fungsi login
     await LoginPage.login('annisa@gmail.com','Password1');
       
    //assection error message
    await DashboardPage.assertDashboardUrl();
    })
})