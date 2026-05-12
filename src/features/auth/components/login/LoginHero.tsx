interface ImageProps {
  src: string;
}

const LoginHero = ({ src }: ImageProps) => {
  return (
    <div className="h-full w-full p-6">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {/* Hero Image */}
        <img src={src}alt="Workforce hub"className="h-full w-full object-cover"/>
        {/* Overlay On Hero Image */}
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/90 via-black/45"></div>
      </div>
    </div>
  );
};

export default LoginHero;