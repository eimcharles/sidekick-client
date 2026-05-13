export interface FormFieldProps {
    name: string
    label: string;
    type: string; 
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput = ({ name, label, type, placeholder, onChange}: FormFieldProps) => {  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}
      className="text-[14px] font-semibold text-slate-400">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="text-[14px] w-full px-3 py-3 
        border bg-gray-100 border-gray-100 rounded-xl outline-none 
        hover:border-teal-600 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all duration-300"
      />
    </div>
  );
};

export default LoginInput;