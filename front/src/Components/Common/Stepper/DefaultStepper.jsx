const DefaultStepper = ({IncreseStep,step,decreseStep,submitFun,publicSubmitFun}) => {
  return (
    <form>
    <div className="flex justify-between items-center w-full text-center  text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm text-sm px-1 py-1">
      <div className="float-right">Job Opening</div>
 
      <ol className="flex font-medium space-x-4 ">
        
        <li style={{cursor: "pointer"}} onClick={()=>decreseStep(1)} className={step ==1 ? 'flex items-center text-blue-600' : 'flex items-center'} >
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 ">
            1
          </span>
          JOB<span className="hidden sm:inline-flex sm:ms-2">DESCRIPTION</span>
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li style={{cursor: "pointer"}} onClick={()=>decreseStep(2)} className={step ==2 ? 'flex items-center text-blue-600' : 'flex items-center'} >
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          JOB <span className="hidden sm:inline-flex sm:ms-2">DETAILS</span>
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li style={{cursor: "pointer"}} onClick={()=>decreseStep(3)} className={step ==3 ? 'flex items-center text-blue-600' : 'flex items-center'} >
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          HIRING TEAM
        </li>
      </ol>
      <div className="">
     
        {step <=2 && (<button onClick={IncreseStep}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-3 py-2 text-center"
        >
          Continue
        </button>)
        }

      {step > 2 && (
        <>  
        <button onClick={submitFun}
          type="button" 
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-3 py-2 text-center"
        >
          Submit
        </button>
        &nbsp; &nbsp;
        <button 
        type="button"  onClick={publicSubmitFun}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-3 py-2 text-center"
      >
        Public 
      </button>
      </>
      )
        }
        

     
      </div>
    </div>
    </form>
  );
};

export default DefaultStepper;
