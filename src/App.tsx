import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen">
        <div className="flex flex-col h-full">
          <Router />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
