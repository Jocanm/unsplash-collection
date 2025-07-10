interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}
const CustomButton = ({
    children,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const basesStyle = "rounded-sm py-2 px-5 font-bevietnam";
    const variantStyles =
        variant === "primary"
            ? "bg-[#E5E7EB] text-black hover:bg-gray-300"
            : "bg-white text-[#6C727F] hover:bg-gray-200";

    return (
        <button className={`${basesStyle} ${variantStyles}`} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;
