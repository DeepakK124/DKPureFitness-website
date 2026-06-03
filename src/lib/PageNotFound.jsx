import { useLocation } from 'react-router-dom';

export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-foreground/20">404</h1>
                        <div className="h-0.5 w-16 bg-primary/20 mx-auto"></div>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-foreground">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                            THE PAGE <span className="text-primary">"{pageName.toUpperCase()}"</span> COULD NOT BE FOUND.
                        </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-widest hover:bg-primary/80 transition-all duration-300"
                        >
                            GO HOME
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}