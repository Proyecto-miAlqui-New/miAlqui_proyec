import React, { PureComponent } from "react";
import Png from "./imagen/teletrabajo.png";
import { Data } from "../location/Data";
import "./styles.scss";
export default class LocationComp extends PureComponent {
  RenderSelectTag = () => {
    const { handleChange } = this.props;
    return (
      <select id="location" name="loc" onChange={handleChange}>
        
        <option value="" selected disabled>
          Selecciona Ubicacion
        </option>
        {Data &&
          Data?.map((item, index) => (
            <option value={item.Location} key={index}>
              {item.Location}
            </option>
          ))}
      </select>
    );
  };
  render() {
    const { src, loc, address } = this.props;
    console.log(src);
    return (
      <main className="main-mapa">
        <div className="title">
          <h1>Mapa y Ubicacion  </h1>
          <img src={Png} alt="png" />
        </div>
        <section>
          <aside>
            {src === "" ? (
              <>
                <p className="loading">
                  <div className="circle"></div>
                  <p className="selectLocation">Please Select The Location</p>
                </p>
              </>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.11229097574!2d-58.19496985000001!3d-26.17215594999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ca5e488cf4f05%3A0xbcaebe65a1bae72!2sFormosa!5e0!3m2!1ses!2sar!4v1698210907128!5m2!1ses!2sar"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


            )}
          </aside>
          <aside className="Details">
            <section>
              <div className="addressDetails">
                <img src={Png} />
              </div>
              
            </section>
            <div className="locationSelection">
                  <label for="location"><h5>Selecciona Provincia</h5></label>
                  {this.RenderSelectTag()}
                </div>
            
            {/* <section>
              {loc && address !== "" && (
                <div className="DetailsData">
                  <h5>Office Location Details</h5>
                  <article className="locationData">
                    <p>Place: {loc}</p>
                    <p>Address: {address}</p>
                  </article>
                </div>
              )}
            </section> */}
             <div className="addressDetails locationSelection">
             <label className="barrio"><h5>Barrio:</h5></label>
              <input
                type="text"
                id=""
                className="fullwidth campo"
                placeholder="Ingrese sus direccion por favor!"
                required
              />
              <label className="calle"><h5>Calle:</h5></label>
              <input
                type="text"
                id=""
                className="fullwidth campo"
                placeholder="Ingrese la calle!"
                required
              />
              </div>

          </aside>
        </section>
      </main>
    );
  }
}
