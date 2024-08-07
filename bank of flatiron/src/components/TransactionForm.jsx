import React, { useState } from 'react';

const TransactionForm = ({ transactions, setTransactions }) => {
    const [formData, setFormData] = useState({
        description: '',
        category: '',
        amount: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((transaction) => {
            setTransactions([transaction, ...transactions]);

            setFormData({ description: '', category: '', amount: '', date: '' });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="description" >Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="category" >Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="amount" >Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="date" >Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        
                        required
                    />
                </div>
                <button type="submit" >Add Transaction</button>
            </form>
        </div>
    );
};

export default TransactionForm;
