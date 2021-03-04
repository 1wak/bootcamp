import React, { Fragment } from "react";
import s from "styled-components";

const Layout = s.div`
    margin: 0 120px;
`;

const Ul = s.ul`
    list-style: none;

    > li:nth-child(odd){
        font-weight: bold;
    }

    > li:nth-child(even){
        color: green;
        font-weight: bold;
    }
`;

const Info = ({ title, ...rest }) => {
  return <h3 {...rest}>{title}</h3>;
};

const Absensi = (
  <Ul>
    <li>Joni</li>
    <li>Joko</li>
    <li>Pranowo</li>
    <li>Galih</li>
    <li>Sumiati</li>
  </Ul>
);

const AbsenMurid = () => {
  return (
    <div>
      <Info style={{ color: "blue" }} title="Murid yang hadir" />
      <div>{Absensi}</div>
    </div>
  );
};

const DaftarGuru = (
  <Ul>
    <li>Suyatno</li>
    <li>Sukijan</li>
    <li>Surtiyem</li>
    <li>Swadlan</li>
    <li>Wiyanto</li>
  </Ul>
);

const AbsenGuru = () => {
  return (
    <div>
      <Info style={{ color: "red" }} title="Guru yang hadir" />
      <div>{DaftarGuru}</div>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nama: "Vijay",
      domisili: "Jogja",
      umur: 25,
      noTelpon: "+628123456789",
    };
  }

  changeUser = () => {
    this.setState({
      nama: "Andang",
      domisili: "Jogja",
      umur: 25,
      noTelpon: "+628987654321",
    });
  };

  render() {
    return (
      <Fragment>
        <Layout>
          <h1>{this.state.nama}</h1>
          <p style={{ fontWeight: "bold" }}>{this.state.domisili}</p>
          <button
            style={{
              background: "black",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "8px",
              fontWeight: "bold",
            }}
            onClick={this.changeUser}
          >
            Change Profile
          </button>
          <div>
            <AbsenMurid />
            <AbsenGuru />
          </div>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
