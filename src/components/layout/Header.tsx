import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  tenant?: string;
}

export const Header = ({ tenant }: HeaderProps) => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg">Adsage</span>
          </div>
          {tenant && (
            <Badge variant="secondary" className="ml-2">
              {tenant}
            </Badge>
          )}
        </div>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Help
          </Button>
          <Button variant="ghost" size="sm">
            Settings
          </Button>
          <Button size="sm">
            Upgrade
          </Button>
        </nav>
      </div>
    </header>
  );
};