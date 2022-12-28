import NavBar from "./components/NavBar";
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import DisplayItems from "./components/DisplayItems";


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})



function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <NavBar/>
    <div className="container">
      <DisplayItems/>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
