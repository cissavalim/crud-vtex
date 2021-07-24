import "./Footer.css";
import React from "react";

export default (props) => (
   <footer className="footer">
      <span>
         Feito por{" "}
         <a
            href="https://github.com/carolvasc/cadastro-usuario"
            target="_blank"
         >
            Carolina Vasconcelos
         </a>
         . Adaptado com <i className="fa fa-heart text-danger"></i> por
         <strong>
            {" "}
            <a href="https://github.com/cissavalim" target="_blank">
               {" "}
               Cecilia Valim
            </a>
         </strong>
      </span>
   </footer>
);
