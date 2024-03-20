"use client"
import TransactionCreateModal from "@/components/modal/TransactionCreateModal";
import Layout from "@/components/Layout/Layout";
import Analytics from "@/components/Analytics/Analytics";

const HomePage = () => {

    return (
        <>
            <Layout>
               <Analytics/>
            </Layout>
            <TransactionCreateModal/>

        </>
    );
};

export default HomePage;