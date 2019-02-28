import React, { createContext, Component } from 'react';
import { setFave, getFaves, removeFave } from '../config/models';

const FavesContext = createContext();

class FavesProvider extends Component {
  // Create *state* in constructor
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  componentDidMount() {
    this.getFaveIds();
  }

  getFaveIds = async () => {
    try {
      const allFaves = await getFaves();
      const faveIds = allFaves.map(fave => fave[0]);
      this.setState({ faveIds });
    } catch (error) {
      console.log(`Error!`, error);
    }
  };

  setFaveId = async faveId => {
    try {
      await setFave(faveId);
      // to call a method, use 'this'
      this.getFaveIds();
    } catch (error) {
      console.log(`Error!`, error);
    }
  };

  removeFaveId = async faveId => {
    try {
      await removeFave(faveId);
      // calling this method *updates* the state
      this.getFaveIds();
    } catch (error) {
      console.log(`Error!`, error);
    }
  };

  render() {
    return (
      // passing everything from state into the prop via 'value'
      <FavesContext.Provider
        value={{
          ...this.state,
          setFaveId: this.setFaveId,
          removeFaveId: this.removeFaveId
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
