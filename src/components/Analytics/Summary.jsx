import React from 'react';
import {Progress} from "antd";

const Summary = ({transactions}) => {
    // total transaction
    const totalTransactions = transactions?.length;
    const totalIncomeTransactions = transactions.filter(
        (transaction) => transaction.type === "income"
    );
    const totalExpenseTransactions = transactions.filter(
        (transaction) => transaction.type === "expense"
    );

    const totalIncomePercent =
        (totalIncomeTransactions?.length / totalTransactions) * 100;
    const totalExpensePercent =
        (totalExpenseTransactions?.length / totalTransactions) * 100;

    //total turnover// totalTransactions=balance
    const totalTurnover = transactions.reduce(
        (acc, transaction) => acc + transaction.amount,
        0
    );

    //totalIncomeTurnover
    const totalIncomeBalance = totalIncomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    //totalExpenseTurnover
    const totalExpenseBalance = totalExpenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomeTurnoverPercent =
        (totalIncomeBalance / totalTurnover) * 100;
    const totalExpenseTurnoverPercent =
        (totalExpenseBalance / totalTurnover) * 100;


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="card border shadow-md rounded-md"
                >
                    <div className="card-header text-2xl pl-5 py-4 bg-gray-200">
                        Total Transactions: {totalTransactions}
                    </div>
                    <div className="flex justify-around">
                        <h5 className="text-xl text-green-700">Income : {totalIncomeTransactions.length}</h5>
                        <h5 className="text-xl text-red-700">Expense : {totalExpenseTransactions.length}</h5>
                    </div>
                    <div className="flex justify-around py-5">
                        <Progress
                            type="circle"
                            strokeColor={"green"}
                            className="mx-2"
                            percent={totalIncomePercent.toFixed(0)}
                        />
                        <Progress
                            type="circle"
                            strokeColor={"red"}
                            className="mx-2"
                            percent={totalExpensePercent.toFixed(0)}
                        />
                    </div>
                </div>


                <div className="card border shadow-md rounded-md"
                >
                    <div className="card-header text-2xl pl-5 py-4 bg-gray-200">
                        Total Turnover: {totalTurnover}
                    </div>
                    <div className="flex justify-around">
                        <h5 className="text-xl text-green-700">Income : {totalIncomeBalance}</h5>
                        <h5 className="text-xl text-red-700">Expense : {totalExpenseBalance}</h5>
                    </div>
                    <div className="flex justify-around py-5 ">
                        <Progress
                            type="circle"
                            strokeColor={"green"}
                            className="mx-2"
                            percent={totalIncomeTurnoverPercent.toFixed(0)}
                        />
                        <Progress
                            type="circle"
                            strokeColor={"red"}
                            className="mx-2"
                            percent={totalExpenseTurnoverPercent.toFixed(0)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;