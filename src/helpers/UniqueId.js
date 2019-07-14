class UniqueId {
  constructor(id) {
    let _id = id;
    this.getUniqueId = () => {
      _id++;
      return _id;
    };
  }
}

export default UniqueId;
