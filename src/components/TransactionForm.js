import React, {Component} from 'react';

class TransactionForm extends Component {
    state = {
        bAccountNo: '',
        iFSC: '',
        bName: '',
        amount: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input type="text" name="bAccountNo" placeholder="Account no." value={this.state.bAccountNo}
                       onChange={this.handleInputChange}/>
                <br/>
                <input type="text" name="iFSC" placeholder="iFSC Code" value={this.state.iFSC}
                       onChange={this.handleInputChange}/>
                <br/>
                <input type="text" name="bName" placeholder="A/C Holder Name" value={this.state.bName}
                       onChange={this.handleInputChange}/>
                <br/>
                <input type="number" name="amount" placeholder="Amount" value={this.state.amount}
                       onChange={this.handleInputChange}/>
                <br/>
                <button type="submit">Submit</button>

            </form>
        );
    }
}

export default TransactionForm;
