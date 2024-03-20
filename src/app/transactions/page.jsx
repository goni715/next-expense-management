"use client"
import Layout from "@/components/Layout/Layout";
import Home from "@/components/Home/Home";
import {DatePicker} from "antd";
import moment from "moment/moment";
import {SetTransactionCreateModalOpen} from "@/redux/features/modal/modalSlice";
import TransactionCreateModal from "@/components/modal/TransactionCreateModal";
import {useDispatch} from "react-redux";
import {useState} from "react";

const TransactionsPage = () => {
    const dispatch = useDispatch();
    const [frequency, setFrequency] = useState("7");
    const [currentFrequency, setCurrentFrequency] = useState("7");
    const [fromDate, setFromDate] = useState("0");
    const [toDate, setToDate] = useState("0");
    const [type, setType] = useState("all");
    return (
        <>
            <Layout>
                <div
                    className="filters flex flex-col md:flex-row md:items-center justify-between py-6 px-4 gap-2 md:px-10 shadow">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div>
                            <h1 className="mb-2"> Select Frequency</h1>

                            <div className="flex flex-col md:flex-row gap-4">
                                <select
                                    value={currentFrequency}
                                    onChange={(e) => {
                                        setFrequency(e.target.value);
                                        setCurrentFrequency(e.target.value)
                                    }}
                                    className="w-full md:w-auto outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                                    id="type" required>
                                    <option value="7">Last 1 Week</option>
                                    <option value="15">Last 15 days</option>
                                    <option value="30">Last 1 Month</option>
                                    <option value="180">Last 6 Month</option>
                                    <option value="365">Last 1 year</option>
                                    {/*<option value="custom">Custom</option>*/}
                                </select>
                                <DatePicker.RangePicker
                                    className="w-full md:w-auto outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                                    onChange={(values) => {
                                        if (values) {
                                            setFrequency("custom");
                                            setFromDate(moment(values[0]['$d']).format('YYYY-MM-DD'));
                                            setToDate(moment(values[1]['$d']).format('YYYY-MM-DD'));
                                        } else {
                                            setFrequency(currentFrequency);
                                            setFromDate("0");
                                            setToDate("0")
                                        }
                                    }}
                                />


                            </div>


                        </div>
                        <div className="filter-tab ">
                            <h1 className="mb-2">Select Type</h1>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full md:w-auto outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                                id="type" required>
                                <option value="all">Both</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-2">
                        <button
                            onClick={() => dispatch(SetTransactionCreateModalOpen(true))}
                            className="w-full md:w-auto px-3 py-1 bg-green-500 hover:bg-green-700 text-white rounded"
                        >
                            Add New
                        </button>
                    </div>
                </div>

                <Home frequency={frequency} fromDate={fromDate} toDate={toDate} type={type}/>
            </Layout>
            <TransactionCreateModal/>
        </>
    );
};

export default TransactionsPage;