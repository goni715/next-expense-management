"use client"
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "antd";
import {useEffect, useState} from "react";
import {SetTransactionCreateModalOpen} from "@/redux/features/modal/modalSlice";
import {useAddTransactionMutation} from "@/redux/features/transaction/transactionApi";
import {Button} from "@material-tailwind/react";
import {log} from "next/dist/server/typescript/utils";


const TransactionCreateModal = () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state)=>state.modal.transactionCreateModalOpen);
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [reference, setReference] = useState("")
    const [description, setDescription] = useState("")
    const [addTransaction, {isSuccess,isLoading}] = useAddTransactionMutation();



    const handleOk = () => {
        dispatch(SetTransactionCreateModalOpen(false));
    };


    const handleCancel = () => {
        dispatch(SetTransactionCreateModalOpen(false));
    };


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetTransactionCreateModalOpen(false));
            setAmount("");
            setType("");
            setCategory("");
            setDate("")
            setReference("");
            setDescription("")
        }
    },[isSuccess, dispatch])





    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            amount,
            type,
            category,
            date,
            reference,
            description
        })
    }


    return (
        <>
            <Modal title="Add New Transaction" open={modalOpen} onOk={handleOk}>
                <form onSubmit={handleSubmit}>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input onChange={(e) => setAmount(e.target.value)} value={amount}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="number"
                               id="amount" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="type">
                            Type
                        </label>
                        <select
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                            className="w-full outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                            id="type" required>
                            <option value="">Select Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="category">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            className="w-full outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                            id="category" required>
                            <option value="">Select Category</option>
                            <option value="salary">Salary</option>
                            <option value="tip">Tip</option>
                            <option value="project">Project</option>
                            <option value="food">Food</option>
                            <option value="movie">Movie</option>
                            <option value="bills">Bills</option>
                            <option value="medical">Medical</option>
                            <option value="fee">Fee</option>
                            <option value="tax">Tax</option>
                        </select>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            onChange={(e) =>{
                                setDate(e.target.value);
                                console.log(e.target.value)
                            }}
                            value={date}
                            className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                            type="date"
                            id="date"
                            required
                        />
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="ref">
                            Reference
                        </label>
                        <input onChange={(e) => setReference(e.target.value)} value={reference}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="ref" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="des">
                           Description
                        </label>
                        <input onChange={(e) => setDescription(e.target.value)} value={description}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="des" required/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button id="cancel" type="reset" onClick={handleCancel}
                                className="block cursor-pointer w-1/2 bg-red-500 hover:bg-red-700 text-center text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <Button type="submit" className={`${isLoading && "capitalize"} w-1/2`} loading={isLoading}>
                            {isLoading ? "Processing..." : "Save"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default TransactionCreateModal;