import React from "react";
import Calendar from "./Calendar";
import "../stylesheets/Editor.scss";
import { Link } from "react-router-dom";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: {
        color: "form",
        date: "",
        face: "",
        message: "",
        mood: []
      }
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleFace = this.handleFace.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleDate(ev) {
    const date = ev.target.value;
    this.setState(prevState => {
      return {
        editor: {
          ...prevState.editor,
          ...this.state.date,
          date
        }
      };
    });
  }

  handleFace(ev) {
    const face = ev.target.value;
    const checked = ev.target.checked;
    if (checked === true) {
      return this.setState(prevState => {
        return {
          editor: {
            ...prevState.editor,
            ...this.state.face,
            face
          }
        };
      });
    } else {
      return checked === false;
    }
  }

  handleMessage(ev) {
    const message = ev.target.value;
    if (this.state.face === ":)") {
      this.setState(prevState => {
        return {
          editor: {
            ...prevState.editor,
            ...this.state.message,
            message
          }
        };
      });
    }
  }

  handleClick(ev) {
    ev.preventDefault();
    this.saveData = true;
    const face = this.state.face;
    this.setState(prevState => {
      return {
        editor: {
          ...prevState.editor,
          ...this.state.mood,
          face
        }
      };
    });
    //alert("carita añadida!");
  }
  handleBack() {}

  render() {
    const { editor, date, face, message } = this.state;
    if (this.saveData === true) {
      return (
        <div>
          <p>{editor.face}</p>
          <Link to="/" className="back">
            <button onClick={this.handleBack}>Volver</button>
          </Link>
        </div>
      );
    }
    return (
      <form className="form hidden" id="idForm">
        <fieldset>
          <label htmlFor="date">Fecha</label>
          <input
            id="date"
            type="date"
            className="form__date"
            onChange={this.handleDate}
            value={date}
            placeholder="fecha de hoy"
          />
        </fieldset>

        <fieldset>
          <legend>Estado</legend>
          <label htmlFor="happy"> =D </label>
          <input
            id="happy"
            className="face_happy"
            onChange={this.handleFace}
            value=":)"
            type="checkbox"
            checked={face}
          />
          <label htmlFor="sad"> :/ </label>
          <input
            id="sad"
            className="face_sad"
            onChange={this.handleFace}
            type="checkbox"
            value=":("
            checked={face}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="message">
            Mensaje
            <input
              id="message"
              type="text"
              onChange={this.handleMessage}
              value={message}
              placeholder="¿Por qué es un buen día?"
            />
          </label>
        </fieldset>
        <button className="save" onClick={this.handleClick}>
          Guardar
        </button>
        <Link to="/" className="back">
          <button className="cancel">Cancelar</button>
        </Link>
        <span>{JSON.stringify(this.state)}</span>
      </form>
    );
  }
}

export default Editor;
