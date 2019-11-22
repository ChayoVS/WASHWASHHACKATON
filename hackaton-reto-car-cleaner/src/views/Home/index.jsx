import React from "react";
import { MapComponent, Button, Input, Confirmation, CreditCard, Select, ServiceCar } from "../../components";
import logo from "../../images/logowash.png";
import "./style.css";

const Home = () => {
  return (
    <main>
        {/* <ServiceCar/> */}
        {/* <CreditCard/> */}
        <Select/>
        {/* <Confirmation/> */}
      <section className="home">
          <div className="input-home">
            <img src={logo} alt="imagen-logo" />
            <Input type="text" placeholder="Escribe una dirección"/>
          </div>
        <MapComponent />
        <div className="button-container">
          <Button text="PEDIR SERVICIO" className="button-service"/>
        </div>
      </section>
    </main>
  );
};

export default Home;
