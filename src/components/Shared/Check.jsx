import { HiCheck } from "react-icons/hi";

const Check = ({ title, ...props }) => {
  return (
    <div className="flex items-center gap-3 py-1">
      <HiCheck
        {...props}
        className="bg-[#5243C21A] md:text-4xl text-2xl p-1 md:p-2 text-[#5243C2] font-semibold rounded-full"
      />
      <p className="text-lg">{title}</p>
    </div>
  );
};
export default Check;