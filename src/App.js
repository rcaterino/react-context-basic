import "./App.css";
import React from "react";

const AppContext = React.createContext({
  //El contexto es como un manejador de estado, que se utiliza, entre otras cosas, para compartir propiedades entre componentes, sin importar su nivel de dependencia en relación a otros componentes. Esto permite.
  //Este es un componente proveedor o y sus propiedades serán utilizadas por uno o más componentes consumidores.

  usuarios: [],
  titulo: 'default',
});

//el siguiente componente de nombre Lista, es el componente consumidor del contexto que provee el componente padre (el provider)
class Lista extends React.Component {
  render() {
    return(
      <AppContext.Consumer> 
        {value => /*esta función permite accesar a todas las propiedades del contexto*/ 
          {
            return(
              <React.Fragment>
                <h1>{value.titulo}</h1>
                <ul>
                  {value.usuarios.map(usuario =>
                    <li>{usuario}</li>
                    )}
                </ul>
              </React.Fragment>
            );
          }
        }
      </AppContext.Consumer>//Consumer declara al consumidor del contexto
    )
  }
}

//Lo siguiente es el componente padre que declara un proveedor/provider llamado Lista
class App extends React.Component {
  render() {
    return (
      <AppContext.Provider value = {{
        usuarios: ['leo', 'juan'],
        titulo: 'App',
      }}>
        <Lista />
      </AppContext.Provider>
    );
  }
}

export default App;
