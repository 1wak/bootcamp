import React, { Fragment } from "react";
import s from "styled-components";

const Layout = s.div`
    margin: 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const CounterWrap = s.div`
    background: #eaeaea;
    width: 450px;
    height: auto;
    text-align: center;
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

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // this.handleClick = this.handleClick.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <div
          style={{
            background: "red",
            borderRadius: "12px",
            // width: "calc(100% - 20%)",
            alignContent: "center",
          }}
        >
          <div>{this.state.count}</div>
          <div>
            <button onClick={this.handleReset}>Reset</button>
            <button onClick={this.handleClick}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

class JsComp extends React.Component {
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
      </Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <div>
            <div>
              <JsComp />
              <AbsenMurid />
              <AbsenGuru />
            </div>
          </div>
          <CounterWrap>
            <Counter />
          </CounterWrap>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
