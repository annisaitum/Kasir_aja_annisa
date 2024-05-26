class RegisterPage {
    //Definisikan locator dari element
    get nameInput(){
        return $('//*[@id="name"]'); //locator field name
    }

    get emailInput(){
        return $('//*[@id="email"]'); //locator field email
    }

    get passwordInput(){
        return $('//*[@id="password"]'); //locator field password
    }

    get submitButton(){
        return $('//*[@id="root"]/div/div/div/div[2]/div/button'); //locator button
    }

    get Msg(){
        return $('//*[@id="toast-4-title"]'); //locator error message
    }

    //Definisikan action/interaksi yang dilakukan pada element tersebut
    async registration(name,email,password){
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async assertMessage(expectedMessage){
        await expect(this.Msg).toHaveTextContaining(expectedMessage);
    }

    async getMessage(){
        return this.Msg.getText();
    }
}