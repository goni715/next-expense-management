

const Loading = () => {

    return (
        <>
            <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">

                <div className="p-3 rounded-md shadow-md animate-pulse">
                    <div className="bg-gray-300 h-[200px] rounded"></div>
                </div>
                <div className="p-3 rounded-md shadow-md animate-pulse">
                    <div className="bg-gray-300 h-[200px] rounded"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className="p-3 rounded-md shadow-md space-y-4 animate-pulse">
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                </div>
                <div className="p-3 rounded-md shadow-md space-y-4 animate-pulse">
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                    <div className="bg-gray-300 h-[40px] rounded"></div>
                </div>
            </div>
        </>
    );
};

export default Loading;