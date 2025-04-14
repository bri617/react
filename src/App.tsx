// App.tsx
import DashboardHomeScreen from "./components/DashboardHomeScreen";
import { DashboardLayout } from "./components/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <DashboardHomeScreen />
    </DashboardLayout>
  );
}

export default App;
