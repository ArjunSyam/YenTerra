import { useState } from "react";
import { AppLayout } from "@/components/layout/app-layout";
import { MainScreen } from "@/screens/mainscreen";
import { CalendarScreen } from "./screens/calander-screen";
import type { Screen } from "./lib/types";

function App() {
  const [screen, setScreen] = useState<Screen>("dashboard");

  return (
    <AppLayout currentScreen={screen} onNavigate={setScreen}>
      {screen === "dashboard" && <MainScreen />}
      {screen === "calendar" && <CalendarScreen />}
    </AppLayout>
  );
}

export default App;
