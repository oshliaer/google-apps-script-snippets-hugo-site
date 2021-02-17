/**
 *
 */
class App {
  /**
   *
   */
  constructor() {
    if (!App._instance) {
      this.data = {
        someValue: 1,
      };
      App._instance = this;
    }
    return App._instance;
  }
  /**
   *
   * @param {*} e
   */
  onOpen(e) {
    const f = Object.assign({}, e);
    f.someValue = this.data.someValue;
    console.log(f);
  }
  /**
   *
   * @param {*} e
   */
  onEdit(e) {
    console.log(e);
  }
}
