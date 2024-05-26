class LoginPage {
    //Definisikan locator dari element
    get emailInput(){
        return $('//*[@id="email"]'); //locator field email
    }

    get PasswordInput(){
        return $('//*[@id="password"]'); //locator field password
    }

    get loginButton(){
        return $('//*[@class="chakra-button css-1n8i4of"]'); //locator button
    }

    get errorMsg(){
        return $('//*[@class="chakra-alert css-qwanz3"]'); //locator error message
    }

    //Definisikan action/interaksi yang dilakukan pada element tersebut
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.PasswordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();