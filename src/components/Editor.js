import React from "react";
import "../stylesheets/Editor.scss";

const Editor = () => {
  return (
    <form className="form">
      <label htmlFor="date">
        Fecha
        <input id="date" type="date" placeholder="fecha de hoy" />
      </label>

      <label htmlFor="state">
        Estado
        <legend>
          <input id="state" type="checkbox" value=":)" /> :)
          <input id="state" type="checkbox" value=":(" /> :(
        </legend>
      </label>

      <label htmlFor="message">
        Mensaje
        <input
          id="message"
          type="text"
          placeholder="¿Por qué es un buen día?"
        />
      </label>
      <button className="save">Guardar</button>
      <button className="cancel">Cancelar</button>
    </form>
  );
};

export default Editor;
