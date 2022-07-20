import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    livro: [
      {
        Nome: "Trono de Vidro",
        Autor: "Sarah J. Maas"
      },
      {
        Nome: "Perdida",
        Autor: "Carina Rissi"
      },
      {
        Nome: "Arte da Guerra",
        Autor: "Sun Tzu"
      },
      {
        Nome: "Procura-se um Marido",
        Autor: "Carina Rissi"
      },
      {
        Nome: "My favorite Mistake",
        Autor: "Chelsea Cameron"
      },
      {
        Nome: "Guerra e Paz",
        Autor: "Liev Tolstói"
      }
    ]
  };

  render() {
    return (
      <section>
        {this.state.livro.map((item) => (
          <ul>
            <li>{item.Nome}</li>
            <li>{item.Autor}</li>
          </ul>
        ))}
      </section>
    );
  }
}
