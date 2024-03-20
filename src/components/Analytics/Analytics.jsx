"use client"
import Loading from "@/components/Loader/Loading";
import {useGetTransactionsReportQuery} from "@/redux/features/transaction/transactionApi";
import Summary from "@/components/Analytics/Summary";
import CategoryWise from "@/components/Analytics/CategoryWise";

const Analytics = () => {
    const {data, isLoading, isError} = useGetTransactionsReportQuery();
    const transactions = data?.data || [];




    return (
        <>
            <div className="px-10 py-4">
                {
                    isLoading ? (
                        <>
                            <Loading/>
                        </>
                    ) : (
                        <>
                            <Summary transactions={transactions}/>
                            <CategoryWise transactions={transactions}/>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default Analytics;