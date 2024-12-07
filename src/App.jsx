import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "@/context/theme-context";
import Container from "@/components/layout/container";
import Search from "@/components/common/search";
import Header from "@/components/layout/header";

// Create a client
const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <Container>
                    <Header />
                    <Search />
                </Container>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
