export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};