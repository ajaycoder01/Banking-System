 class BankAccount {
      constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
      }

      deposit(amount) {
        if (amount <= 0) {
          alert("Deposit amount must be positive.");
          return;
        }
        this.balance += amount;
        this.transactions.push({ type: "deposit", amount });
      }

      withdraw(amount) {
        if (amount <= 0) {
          alert("Withdrawal amount must be positive.");
          return;
        }
        if (amount > this.balance) {
          alert("Insufficient funds.");
          return;
        }
        this.balance -= amount;
        this.transactions.push({ type: "withdraw", amount });
      }

      getBalance() {
        return this.balance;
      }

      getTransactionHistory() {
        return this.transactions;
      }
    }

    let account = null;

    function createAccount() {
      const name = document.getElementById("ownerName").value.trim();
      if (name === "") {
        alert("Please enter a name.");
        return;
      }

      account = new BankAccount(name);
      document.getElementById("ownerDisplay").textContent = name;
      document.getElementById("accountControls").style.display = "block";
      updateUI();
    }

    function deposit() {
      const amount = parseFloat(document.getElementById("amountInput").value);
      account.deposit(amount);
      updateUI();
    }

    function withdraw() {
      const amount = parseFloat(document.getElementById("amountInput").value);
      account.withdraw(amount);
      updateUI();
    }

    function updateUI() {
      document.getElementById("balance").textContent = account.getBalance().toFixed(2);
      const history = account.getTransactionHistory();
      const historyList = document.getElementById("history");
      historyList.innerHTML = "";
      history.forEach((tx, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1} - ${tx.type.toUpperCase()}: $${tx.amount}`;
        historyList.appendChild(li);
      });
    }