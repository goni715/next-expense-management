import {Progress} from "antd";
const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
];

const CategoryWise = ({transactions}) => {

    const totalIncomeTransactions = transactions.filter(
        (transaction) => transaction.type === "income"
    );
    const totalExpenseTransactions = transactions.filter(
        (transaction) => transaction.type === "expense"
    );

    //totalIncomeTurnover//totalIncomeBalance
    const totalIncomeTurnover = totalIncomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    //totalExpenseTurnover//totalIncomeBalance
    const totalExpenseTurnover = totalExpenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div>
                    <h6 className="p-2 text-2xl font-bold font-serif">Categorywise Income</h6>
                    {categories.map((category) => {
                        const amount = transactions
                            .filter(
                                (transaction) =>
                                    transaction.type === "income" &&
                                    transaction.category === category
                            )
                            .reduce((acc, transaction) => acc + transaction.amount, 0);
                        return (
                            amount > 0 && (
                                <div key={amount} className="card mt-2 shadow p-2 rounded-md">
                                    <div className="card-body">
                                        <h6 className="capitalize">{category}</h6>
                                        <Progress
                                            percent={((amount / totalIncomeTurnover) * 100).toFixed(
                                                0
                                            )}
                                        />
                                    </div>
                                </div>
                            )
                        );
                    })}


                </div>
                <div>
                    <h6 className="p-2 text-2xl font-bold font-serif">Categorywise Expense</h6>
                    {categories.map((category) => {
                        const amount = transactions
                            .filter(
                                (transaction) =>
                                    transaction.type === "expense" &&
                                    transaction.category === category
                            )
                            .reduce((acc, transaction) => acc + transaction.amount, 0);
                        return (
                            amount > 0 && (
                                <div key={amount} className="card mt-2 shadow p-2 rounded-md">
                                    <div className="card-body">
                                        <h6 className="capitalize">{category}</h6>
                                        <Progress
                                            strokeColor={"red"}
                                            percent={((amount / totalExpenseTurnover) * 100).toFixed(
                                                0
                                            )}
                                        />
                                    </div>
                                </div>
                            )
                        );
                    })}


                </div>
            </div>
        </>
    );
};

export default CategoryWise;