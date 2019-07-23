// Bank account (ATM)

var bankAccount = function(){
  var balance = 0;
  var history = [];
  var account = {name:"Stefan Alin",birthDay:'29-12-1991',pin:'0000',nationality:'Romanian'}
  
  function deposit(amount){
    history.push('Transaction:Deposit ' + 'Amount: ' + amount + ' ' + new Date());
    return (balance +=amount);
  }
  function withdraw(amount){
    history.push('Transaction:Withdraw ' + 'Amount: ' + amount + ' ' + new Date());
    return (balance -= amount);
  }
  
  function accountDetails(option){
    if(option === 'history'){
      console.log(account.name);
        for(let i = 4; i >= 0;i--){
          console.log(history[i])
          
        }
      console.log(`Your account Ballance is ${balance}`)
      }
  }

  return {
    deposit,
    withdraw,
    accountDetails
  }
}()

bankAccount.deposit(100);
bankAccount.deposit(150);
bankAccount.deposit(150);
bankAccount.withdraw(300);
bankAccount.deposit(150);
bankAccount.deposit(150);
bankAccount.withdraw(30);
bankAccount.deposit(1500);
bankAccount.accountDetails('history');


