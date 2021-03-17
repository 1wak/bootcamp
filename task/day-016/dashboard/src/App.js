import { Button, Container, Input, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Layout from "./components/Layout";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Container className="app">
          <Typography variant="h3" component="h1">
            Todo APP
          </Typography>
          <Input type="text" />
          <Button>Submit</Button>
        </Container>
      </Layout>
    );
  }
}

// create todo (form input)
// mark as complete
//     tandai kalau itu sudah komplit / terlaksana
//     bisa pakai checkbox, berubah warna dll.
// update
// delete
// data yang dipakai boleh pakai json atau dummy data
// dibuat pakai context
