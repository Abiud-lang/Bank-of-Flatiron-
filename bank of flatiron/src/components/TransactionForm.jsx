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

        fetch('https://flatiron-bank-trq3.vercel.app/transactions', {
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
        <div className='flex justify-center items-center shadow-2xl rounded-md text-center p-4 m-4' >
            <form onSubmit={handleSubmit}>
                <div  className='mb-4' >
                    <label className=' flex justify-center ' htmlFor="description" >Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                           className="p-2 border-2 rounded-lg shadow-sm"
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className=' flex justify-center' htmlFor="category" >Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                           className="p-2 border-2 rounded-lg shadow-sm"
                        required
                    />
                </div>
                <div className='mb-4 '>
                    <label className='flex justify-center ' htmlFor="amount" >Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                           className="p-2 border-2 rounded-lg shadow-sm"
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
                <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold px-5 py-2 rounded m-2' type="submit" >Add </button>
            </form>
        </div>
    );
};

export default TransactionForm;
