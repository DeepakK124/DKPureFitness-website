import { useLocation } from 'react-router-dom';

export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0A0B]">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-white/20">404</h1>
                        <div className="h-0.5 w-16 bg-[#F97316]/20 mx-auto"></div>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-white">
                            Page Not Found
                        </h2>
                        <p className="text-[#9CA3AF] leading-relaxed font-mono text-sm">
                            THE PAGE <span className="text-[#F97316]">"{pageName.toUpperCase()}"</span> COULD NOT BE FOUND.
                        </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-6 py-3 bg-[#F97316] text-white font-mono text-xs tracking-widest hover:bg-[#F97316]/80 transition-all duration-300"
                        >
                            GO HOME
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}