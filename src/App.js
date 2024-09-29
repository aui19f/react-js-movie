import { RouterProvider } from "react-router-dom";
import router from "./Router";
import client from "./client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />;
    </ApolloProvider>
  );
}

export default App;
