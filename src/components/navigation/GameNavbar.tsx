interface GameNavbarProps {
  onBack: () => void;
}

export default function GameNavbar({ onBack }: GameNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1001] flex h-[60px] items-center bg-white p-3 shadow-md">
      {/* Updated back button with Tailwind classes */}
      <button 
        className="mr-4 cursor-pointer rounded bg-transparent p-2 text-base text-gray-600 transition hover:bg-gray-100 border-none" 
        onClick={onBack}
      >
        ‹ Back
      </button>
      {/* Updated title with Tailwind classes */}
      <div className="absolute left-1/2 -translate-x-1/2 text-lg font-medium text-gray-800">
        Verifiable Binomial Mechanism Example
      </div>

      {/* Updated right section with Tailwind classes */}
      <div className="ml-auto flex items-center gap-3">
        {/* Updated color reference with Tailwind classes */}
        <div className="flex items-center gap-1 text-xs">
          <div className="h-3.5 w-3.5 rounded-sm bg-blue-500"></div> {/* Private */}
          <span>Private to the curator</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <div className="h-3.5 w-3.5 rounded-sm bg-green-500"></div> {/* Public */}
          <span>Public to the verifier</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <div className="h-3.5 w-3.5 rounded-sm bg-red-600"></div> {/* Nefarious */}
          <span>Attempt to lie by the Curator</span>
        </div>
      </div>
    </nav>
  );
} 