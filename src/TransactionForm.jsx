import React, { useEffect } from 'react';
import './TransactionForm.css'
const TransactionForm = () => {
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            window.location.href = 'login.jsx';
        }
    }, []);

    const initTransaction = () => {
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            const senderAddress = document.getElementById('senderAddress').value;
            const receiverAddress = document.getElementById('receiverAddress').value;
            const itemPrice = document.getElementById('itemPrice').value;
            const deadline = document.getElementById('deadline').value;
            const interestRate = document.getElementById('interestRate').value;
            const hasCollateral = document.getElementById('hasCollateral').checked;

            document.getElementById('displaySender').innerText = senderAddress;
            document.getElementById('displayReceiver').innerText = receiverAddress;
            document.getElementById('displayItemPrice').innerText = itemPrice;
            document.getElementById('displayRemainingAmount').innerText = itemPrice;
            document.getElementById('displayReturnDeadline').innerText = deadline;
            document.getElementById('displayInterestRate').innerText = interestRate;
            document.getElementById('displayIsCompleted').innerText = 'No';
            document.getElementById('displayCollateral').innerText = hasCollateral ? 'Yes' : 'No';

            document.getElementById('transactionDetails').style.display = 'block';
            document.getElementById('loading').style.display = 'none';
        }, 3000);
    };

    return (
        <React.Fragment>
            <form id="transactionForm">
                <label htmlFor="senderAddress">Sender Address:</label>
                <input type="text" id="senderAddress" required />

                <label htmlFor="receiverAddress">Receiver Address:</label>
                <input type="text" id="receiverAddress" required />

                <label htmlFor="itemPrice">Amount:</label>
                <input type="number" id="itemPrice" required />

                <label htmlFor="deadline">Return Deadline:</label>
                <input type="number" id="deadline" required />

                <label htmlFor="interestRate">Interest Rate per Day:</label>
                <input type="number" id="interestRate" required />

                <label htmlFor="hasCollateral">Collateral Provided:</label>
                <input type="checkbox" id="hasCollateral" />

                <button type="button" onClick={initTransaction}>Initiate Transaction</button>
                <div className="loading" id="loading" style={{ display: 'none' }}>Processing...</div>
            </form>

            <div id="transactionDetails" className="transaction-details" style={{ display: 'none' }}>
                <h2>Transaction Details</h2>
                <p><strong>Sender Address:</strong> <span id="displaySender"></span></p>
                <p><strong>Receiver Address:</strong> <span id="displayReceiver"></span></p>
                <p><strong>Item Price:</strong> <span id="displayItemPrice"></span></p>
                <p><strong>Remaining Amount:</strong> <span id="displayRemainingAmount"></span></p>
                <p><strong>Return Deadline in Seconds:</strong> <span id="displayReturnDeadline"></span></p>
                <p><strong>Interest Rate per Day:</strong> <span id="displayInterestRate"></span></p>
                <p><strong>Is Completed:</strong> <span id="displayIsCompleted"></span></p>
                <p><strong>Collateral Provided:</strong> <span id="displayCollateral"></span></p>
            </div>
        </React.Fragment>
    );
};

export default TransactionForm;
