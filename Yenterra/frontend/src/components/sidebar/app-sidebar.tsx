import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { NAV_ITEMS } from "@/constants/nav-item";
import type { Screen } from "@/lib/types";

interface AppSidebarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function AppSidebar({ currentScreen, onNavigate }: AppSidebarProps) {
  return (
    <Sidebar
      className="[&>[data-sidebar=sidebar]]:bg-sidebar/70 [&>[data-sidebar=sidebar]]:backdrop-blur-md"
      style={{ "--sidebar-width": "16rem" } as React.CSSProperties}
    >
      <SidebarHeader className="px-4 py-3">
        <h1 className="text-lg font-semibold tracking-tight">Yenterra</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    disabled={item.disabled}
                    isActive={item.screen === currentScreen}
                    onClick={() => item.screen && onNavigate(item.screen)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-3">
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
