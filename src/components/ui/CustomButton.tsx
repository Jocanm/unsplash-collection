interface ButtonProps {
    children: React.ReactNode;
}
const CustomButton = ({ children }: ButtonProps) => {
    return (
        <button className="bg-[#E5E7EB] rounded-sm py-2 px-5 ">
            {children}
        </button>
    );
};

export default CustomButton;
