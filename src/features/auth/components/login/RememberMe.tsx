interface RememberMeCheckboxProps {
  name: string;
  label: string;
}

const RememberMeCheckbox = ({ name, label }: RememberMeCheckboxProps) => {
  return (
    <label className="flex items-center gap-2 group">
      <input 
      name={name} 
      type="checkbox" 
      className="w-3.5 h-3.5 border-gray-300 rounded text-teal-600 focus:ring-teal-600 accent-[#265c5c] cursor-pointer"/>
      <span className="text-[12px] font-semibold text-slate-400 group-hover:text-teal-600 group-active:text-[#265c5c] transition-colors cursor-pointer"> 
        {label}
      </span>
    </label>
  );
};

export default RememberMeCheckbox;