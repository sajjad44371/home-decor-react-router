const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-height-[350px] py-12 gap-4 animate-fade-in">
      {/* Modern Gradient Spinner Container */}
      <div className="relative flex items-center justify-center w-16 h-16">
        {/* Outer Ring Smooth Glow Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500/10 scale-105"></div>

        {/* Main Spinning Element */}
        <div className="w-12 h-12 rounded-full border-4 border-t-indigo-600 border-r-indigo-400 border-b-slate-100 border-l-slate-100 animate-spin shadow-md"></div>

        {/* Center Minimal Dot */}
        <div className="absolute w-2 h-2 rounded-full bg-indigo-600"></div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">
          Loading Data
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-400 animate-pulse">
          Please wait a moment...
        </span>
      </div>
    </div>
  );
};

export default Loader;
