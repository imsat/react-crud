import React, {Component} from 'react';
import TransactionForm from "./TransactionForm";

class TransactionList extends Component {
    state = {
      lists: this.returnLists()
    }

    returnLists = () => {
        if(localStorage.getItem('transactions') == null) {
            localStorage.setItem('transactions', [])
        }

        return JSON.parse(localStorage.getItem('transactions'))
    }

    render() {
        return (
            <div>
                <TransactionForm />
                <hr/>
                <p>List of transactions</p>
            </div>
        );
    }
}

export default TransactionList;
