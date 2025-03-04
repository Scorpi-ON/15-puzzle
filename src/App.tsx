import { Navbar } from "@/components/header/navbar.tsx";
import { Main } from "@/components/main/main.tsx";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Main />
        </ThemeProvider>
    );
}

export default App;
