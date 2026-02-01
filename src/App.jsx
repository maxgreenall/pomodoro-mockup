export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* iPhone Mockup Frame */}
      <div className="relative w-full max-w-[390px]">
        {/* iPhone Bezel */}
        <div className="bg-black rounded-[2.5rem] border-[12px] border-black shadow-2xl" style={{
          aspectRatio: '9 / 19.5'
        }}>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[28px] bg-black rounded-b-[2rem] z-10" />
          
          {/* Screen Content Area */}
          <div className="w-full h-full bg-gradient-to-b from-neutral-900 to-black rounded-[2rem] overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-12 bg-black flex items-center justify-between px-6 text-white text-xs font-semibold">
              <span>9:41</span>
              <span>📡</span>
            </div>

            {/* Mockup Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center">
              {/* Placeholder for design mockup */}
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Pomodoro Mockup</h1>
                <p className="text-neutral-400 text-sm mb-8">
                  Ready to design. Use Claude to build your timer UI here.
                </p>
                <div className="w-24 h-24 bg-neutral-800 rounded-lg mx-auto mb-6" />
                <p className="text-neutral-500 text-xs">iPhone 15 Pro - 390x844</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: iPhone Details */}
        <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 50%)',
        }} />
      </div>
    </div>
  )
}
