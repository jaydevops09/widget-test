class e {
  constructor() {
    this.widgetElement = null, this.subDomain = "", this.container = document.createElement("div"), this.container.id = "I2ICAWidget";
  }
  init(t) {
    this.subDomain = t, this.widgetElement = document.createElement("clinician-availability-container"), this.widgetElement.dataset.subdomain = t, this.container.appendChild(this.widgetElement), document.body.appendChild(this.container);
  }
  openWidget(t) {
    this.widgetElement && (this.widgetElement.email = t, this.widgetElement.togglePopup());
  }
  closeWidget() {
    this.widgetElement && this.widgetElement.closePopup();
  }
}
window.I2ICAWidget = e;
export {
  e as I2ICAWidget
};
