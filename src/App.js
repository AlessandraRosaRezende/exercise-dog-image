import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogsURL: [],
      loading: true,
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.addNewDog = this.addNewDog.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async addNewDog() {
    this.fetchApi();
  }

  async fetchApi() {
    const dogObj = await fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json());

    this.setState(
      (prevState) => ({ dogsURL: [...prevState.dogsURL,
        dogObj.message],
      loading: false }),
    );
  }

  render() {
    const { dogsURL, loading } = this.state;

    return (
      <div className="App">
        {loading ? <h1>Loading...</h1>
          // eslint-disable-next-line max-len
          : dogsURL.map((url) => <img src={ url } key={ url } alt="Um cachorro fofo" width="200px" height="200px" />)}

        <button type="button" onClick={ this.addNewDog }>Adiciona doguinho</button>
      </div>
    );
  }
}

export default App;
