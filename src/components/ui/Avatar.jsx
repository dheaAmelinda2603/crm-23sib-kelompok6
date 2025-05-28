export function Avatar({ children, className = "" }) {
  return (
    <div
      className={`rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

export function AvatarFallback({ children }) {
  return (
    <span className="text-xl font-bold select-none">
      {children}
    </span>
  );
}
