import { useState } from 'react';

const store = {
  state: {},
  setState(value) {
    this.state = value;
    this.setters.forEach(setter => setter(this.state));
  },
  setters: []
};
export default store;