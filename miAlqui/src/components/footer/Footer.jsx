import React from "react";

export const Footer = () => {
  return (
    <section className="content contact">
      <h6 style={{ fontSize: 20, color: "white", paddingTop: 120 }}>
        Encontranos en:
      </h6>
      <div className="redes">
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <i className="link-icon fa fa-facebook" />
          <span className="link-redes-title">Facebook</span>
        </a>
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <i className="link-icon fa fa-twitter" />
          <span className="link-redes-title">Twitter</span>
        </a>
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <i className="link-icon fa fa-instagram" />
          <span className="link-redes-title">Intagram</span>
        </a>
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <i className="link-icon fa fa-google" />
          <span className="link-redes-title">Google</span>
        </a>
      </div>
      {/* pie de pagina  */}
      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              ©Villalba Milagros ©Mereles Juliana ©Gonzalez Malena
            </font>
          </font>
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Privacidad</font>
              </font>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Términos</font>
              </font>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Apoyo</font>
              </font>
            </a>
          </li>
        </ul>
      </footer>
      {/* scripts */}
    </section>
  );
};
