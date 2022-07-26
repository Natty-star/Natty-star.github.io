class Account {
    static accountInfoList = [];
    #accountName;
    #deposit;
    // constructor(accountName,deposit){
    //     this.accountName = accountName;
    //     this.deposit = deposit;
    // }
    createAccount(accountName,deposit){
         this.#accountName = accountName;
         this.#deposit = deposit;
    }

    getAccountName(){
        return this.#accountName;
    }
    getDeposit(){
        return this.#deposit;
    }

    storeToLocal(accounts){
        localStorage.clear();
        var text = '';
        for(let i=0; i< accounts.length; i++){
            text+= accounts[i].getAccountName() + ',' + accounts[i].getDeposit();
        }
        localStorage.setItem("accounts",text);
    }

}

if(localStorage.getItem('accounts')){
    const accounts = localStorage.getItem('accounts');
    console.log(accounts);
    Account.accountInfoList.push(localStorage.getItem('accounts'));
}

var button = document.getElementById('button').addEventListener("click", newAccount );

function newAccount(e){
var accountName = document.getElementById('accountName').value;
var deposit = document.getElementById('deposit').value;
//var textarea = document.getElementById('accounts');
    const account = new Account();
    account.createAccount(accountName,deposit);
    
   Account.accountInfoList.push(account);
   //console.log(Account.accountInfoList);
   localStorage.setItem('accounts',JSON.stringify(Account.accountInfoList));
   console.log(Account.accountInfoList);
   //account.storeToLocal(Account.accountInfoList);
  
   display();
}

function display(){
    var accounts = Account.accountInfoList;
    var textarea = '';
    for (let i = 0; i < accounts.length; i++) {
        textarea+="Account Name: "+ accounts[i].getAccountName() + " Deposit: " + accounts[i].getDeposit()+'\n';
    }
    document.getElementById('accounts').innerHTML = textarea;
}