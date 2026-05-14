interface NavItemProps {
  label: string;
  href: string; 
  textSize: string;
}

const NavLink = ({ href, textSize, label }: NavItemProps) => {
  return (
    <a href={href} 
    className={`${textSize} font-semibold text-slate-400 relative group hover:text-teal-600 active:text-teal-600 transition-colors`}>
      {label} 
      <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full group-active:w-full"/>
    </a>
  );
};

export default NavLink;