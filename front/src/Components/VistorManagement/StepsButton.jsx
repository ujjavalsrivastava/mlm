const StepsButton = ({ formStep, nextStep, previousStep,button }) => {
  return (
    <div className="py-2 items-center bg-white rounded shadow-md shadow-slate-300 px-2 mb-2 sm:w-2/3 md:w-2/3 lg:w-96 w-[90%] mx-auto">
      <div className="flex items-start justify-between">
        {(formStep === -1)  ? (
          <div></div>
        ) : (
          <div
            className="!relative !inline-flex !items-center !justify-center !p-0.5 !overflow-hidden !text-sm !font-medium !text-gray-900 !rounded-lg !group !bg-gradient-to-br !from-green-400 !to-blue-600 !group-hover:from-green-400 !group-hover:to-blue-600 !hover:text-white  !focus:ring-4 !focus:outline-none !focus:ring-green-200 "
            onClick={previousStep}
          >
            <span className="!relative !px-5 !py-2 !transition-all !ease-in !duration-75 !bg-white !rounded-md !group-hover:bg-opacity-0 btn-active btn-back">
              Back
            </span>
          </div>
        )}
        {formStep >= 6 ? (
          <div  className="!relative !inline-flex !items-center !justify-center !p-0.5 !overflow-hidden !text-sm !font-medium !text-gray-900 !rounded-lg !group !bg-gradient-to-br !from-green-400 !to-blue-600 !group-hover:from-green-400 !group-hover:to-green-600 !hover:text-white  !focus:ring-4 !focus:outline-none !focus:ring-green-200 ">
            <button className="!relative !px-5 !py-2 !transition-all !ease-in !duration-75 !bg-white !rounded-md !group-hover:bg-opacity-0 btn-submit " type="submit">
              Submit
            </button>
          </div>
        ) : (

          <div  className="!relative !inline-flex !items-center !justify-center !p-0.5 !overflow-hidden !text-sm !font-medium !text-gray-900 !rounded-lg !group !bg-gradient-to-br !from-green-400 !to-blue-600 !group-hover:from-green-400 !group-hover:to-blue-600 !hover:text-white  !focus:ring-4 !focus:outline-none !focus:ring-green-200 ">
          <button disabled={button} onClick={nextStep} className="!relative !px-5 !py-2 !transition-all !ease-in !duration-75 !bg-white !rounded-md !group-hover:bg-opacity-0 btn-next " type="button">
            Next
          </button>
        </div>
        //   <div
        //   className="!relative !inline-flex !items-center !justify-center !p-0.5 !overflow-hidden !text-sm !font-medium !text-gray-900 !rounded-lg !group !bg-gradient-to-br !from-green-400 !to-blue-600 !group-hover:from-green-400 !group-hover:to-blue-600 !hover:text-white  !focus:ring-4 !focus:outline-none !focus:ring-green-200 "
        //   onClick={nextStep}
        // >
        //   <span className={button ? '!relative !px-5 !py-2 !transition-all !ease-in !duration-75 !bg-white !rounded-md !group-hover:bg-opacity-0 btn-next btn-disable' : "!relative !px-5 !py-2 !transition-all !ease-in !duration-75 !bg-white !rounded-md !group-hover:bg-opacity-0 btn-active btn-next"}>
        //   Next
        // </span>
        // </div>
          // <button
          // type="button"
          //   className="btn btn-info"
          //   onClick={nextStep}
          //   disabled={button}
          // >
          //   Next
          // </button>
        )}
      </div>
    </div>
  );
};

export default StepsButton;
