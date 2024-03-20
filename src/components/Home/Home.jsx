"use client"
import {useGetTransactionsQuery} from "@/redux/features/transaction/transactionApi";
import {MdDelete, MdDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";
import moment from "moment";
import {Table} from "antd";
import {FaEdit} from "react-icons/fa";
import {useEffect, useState} from "react";
import Loading from "@/components/Loader/Loading";
import ListLoading from "@/components/Loader/ListLoading";
import {useDispatch} from "react-redux";
import {SetTransactionDeleteModalOpen, SetTransactionEditModalOpen} from "@/redux/features/modal/modalSlice";
import {SetTransaction, SetTransactionId} from "@/redux/features/transaction/transactionSlice";
import TransactionDeleteModal from "@/components/modal/TransactionDeleteModal";
import TransactionEditModal from "@/components/modal/TransactionEditModal";



const Home = ({frequency, fromDate, toDate, type}) => {
    const {data, isLoading, isError} = useGetTransactionsQuery({frequency, fromDate, toDate, type});
    const transactions = data?.data || [];
    const dispatch = useDispatch();

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
        },
        {
            title: "Amount",
            dataIndex: "amount",
        },
        {
            title: "Type",
            dataIndex: "type",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "Reference",
            dataIndex: "reference",
        },
        {
            title: "Actions",
            render: (text, record) => (
                <div className="flex gap-4">
                    <FaEdit
                        onClick={()=>{
                            dispatch(SetTransactionId(record._id))
                            dispatch(SetTransaction(
                                {
                                    ...record,
                                    date: moment(record.date).format("YYYY-MM-DD")
                                }
                            ));
                            dispatch(SetTransactionEditModalOpen(true))
                        }}
                        size={28}
                        className="cursor-pointer text-green-600"
                    />
                    <MdDelete
                        onClick={()=>{
                            dispatch(SetTransactionId(record._id))
                            dispatch(SetTransactionDeleteModalOpen(true))
                        }}
                        size={28}
                        className="cursor-pointer text-red-600"
                    />
                </div>
            ),
        },
    ];




    return (
        <>

            <div className="px-4 py-2 w-full">
                    {/*<h1 className="text-3xl pb-3">Home Component</h1>*/}
                    {
                        isLoading ? (
                            <>
                                <ListLoading/>
                            </>
                        ) : (
                            <>

                                <div className="w-full shadow-md py-2 rounded">
                                    <div className="w-auto overflow-x-auto h-[45vh] md:h-[70vh]">
                                        <Table columns={columns} className="w-full" dataSource={transactions}/>
                                    </div>
                                </div>
                            </>
                        )
                    }
            </div>

            <TransactionDeleteModal/>
            <TransactionEditModal/>

        </>
    );
};

export default Home;