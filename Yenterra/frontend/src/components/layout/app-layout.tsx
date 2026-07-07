import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import type { Screen } from "@/lib/types";

interface AppLayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function AppLayout({
  children,
  currentScreen,
  onNavigate,
}: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar currentScreen={currentScreen} onNavigate={onNavigate} />
        <main className="flex-1 overflow-y-auto bg-background">{children}</main>
      </div>
    </SidebarProvider>
  );
}
