import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="Link">
          <a href="">Spilup</a>
        </div>
        <div className="flex">
          <div className="Link">
            <a href="#">Home</a>
          </div>
          <div className="Link">
            <a href="#">Servicios</a>
          </div>
          <div className="Link">
            <a href="#">Contactos</a>
          </div>
        </div>
      </div>
    </div>
  );
};
