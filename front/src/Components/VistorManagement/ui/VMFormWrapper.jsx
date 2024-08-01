import { cn } from "@/helper/cn";

const VMFormWrapper = ({ children }) => {
  return (
    <div className={cn("flex justify-center items-center")}>
      <div className="bg-light rounded px-3.5 pt-6 pb-8 mb-px sm:w-2/3 md:w-2/3 lg:w-96 w-[90%] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default VMFormWrapper;
