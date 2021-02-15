class User {
    constructor(username, emailAddress){
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    displayBalance(){
        console.log(this.accountBalance);
        return this;
    }
    transferMoney(otherUser, amount){
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        console.log(this.accountBalance);
        console.log(otherUser.accountBalance);
    }
}

const shanna = new User("Shanna Pilcher", "shanna@user.com");
const ty = new User("Ty Pilcher", "ty@user.com");
const lex = new User("Lex Pilcher", "lex@user.com");
shanna.makeDeposit(300).makeDeposit(200).makeDeposit(100).makeWithdrawal(75).displayBalance();
ty.makeDeposit(400).makeDeposit(200).makeWithdrawal(75).makeWithdrawal(75).displayBalance();
lex.makeDeposit(1000).makeWithdrawal(150).makeWithdrawal(280).makeDeposit(50).displayBalance();
shanna.transferMoney(lex, 100);