class StateDto {
  constructor(rawData) {
    this.data = rawData;
  }

  getState = () => {
    return this.data;
  }
}

export default StateDto;

