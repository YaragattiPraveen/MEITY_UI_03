const ProgressSteps = ({ formArray, currentPage }) => {
    return (
        <div className='flex justify-center items-center'>
            {
                formArray?.map((v, i) => (

                    <div key={i} className="flex justify-center items-center">
                        <div
                            className={`w-[25px] md:w-[35px] my-3 text-white rounded-full ${(currentPage + 1 >= v) ? 'bg-bg__color' : 'bg-slate-400'
                                } h-[25px] md:h-[35px] flex justify-center items-center transition-colors`}
                            key={i}
                        >
                            {v}
                        </div>
                        {i !== formArray?.length - 1 && (
                            <div
                                className={`w-[28px] md:w-[20px] lg:w-[60px] h-[2px] ${(currentPage + 1 >= v) ? 'bg-bg__color' : 'bg-slate-400'
                                    } transition-colors duration-300 ease-in-out`}
                                key={`line-${v}`}
                            ></div>
                        )}
                    </div>

                ))
            }
        </div>
    )
}

export default ProgressSteps