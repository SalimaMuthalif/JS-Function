// 1.BankAccount;

        class BankAccount {
            #balance; 
        
        constructor(initialBalance = 0) {
          if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
          }
          this.#balance = initialBalance;
        }
      
        deposit(amount) {
          if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero");
          }
          this.#balance += amount;
          return this.#balance;
        }
      
        withdraw(amount) {
          if (amount <= 0) {
            throw new Error("Withdraw amount must be greater than zero");
          }
          if (amount > this.#balance) {
            throw new Error("Insufficient balance");
          }
          this.#balance -= amount;
          return this.#balance;
        }
      
        getBalance() {
          return this.#balance;
        }
        }
      
      
      const account = new BankAccount(100);
      account.deposit(50); 
      account.withdraw(30); 
      console.log(account.getBalance());

// 2. Function greet

    function greet(name) {
    try {
      if (!name.trim()) {
        throw new Error("Name cannot be empty");
      }
      console.log(`Hello, ${name}!`);
    } catch (error) {
      console.error(error.message);
    }
    }
  
  
    greet(""); 
    greet("Alice"); 