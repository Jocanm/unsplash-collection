import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex">
        <div className="flex flex-col flex-auto h-full">
          <Router />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
