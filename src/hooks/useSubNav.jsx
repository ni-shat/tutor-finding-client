

const useSubNav = (navTitle) => {
    return (
        <nav className=" bg-gray-100 relative top-16 z-20">
            <div className='w-[94%] py-4 text-xs roboto-normal-500 mx-auto flex justify-between'>
                <div>
                    <p className='text-[#1e326e] uppercase'>{navTitle}</p>
                </div>
                <div className="flex gap-2">
                    <p className='text-gray-400'>Home</p>
                    <p className='text-gray-700'>|</p>
                    <p className='text-gray-700'>{navTitle}</p>
                </div>
            </div>
        </nav>
    );
};

export default useSubNav;