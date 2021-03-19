import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ListData from "./ListData";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const Dashboard = () => {
  return (
    <ApolloProvider client={client}>
      <ListData />
    </ApolloProvider>
  );
};

export default Dashboard;

// Membuat Client yang menampilkan list

//     Nama
//     Alamat
//     No Hp
//     Pekerjaan
//     Hobi
//     bebas design custom
// //
