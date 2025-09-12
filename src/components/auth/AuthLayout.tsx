import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-primary-foreground">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-3xl font-bold">Adsage</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Multi-tenant Ads Management Platform
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Streamline your advertising workflows across multiple organizations
            </p>
          </div>
          
          <div className="space-y-4 text-primary-foreground/90">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <span>Multi-tenant architecture</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <span>Role-based access control</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <span>Advanced analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};