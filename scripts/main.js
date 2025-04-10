const { createApp } = Vue;

createApp({
  data() {
    return {
      spendenart: "geschaeftsstelle",
      adresse: { strasse: "", plz: "", ort: "" },
      kleidung: "",
      krisengebiet: "",
      datum: "",
      bestaetigt: false,
      ausgabeOrt: ""
    };
  },
  methods: {
    verarbeiteSpende() {
      if (this.spendenart === "abholung") {
        if (!this.adresse.plz.startsWith("12")) {
          alert("Die Adresse liegt außerhalb des Abholbereichs.");
          return;
        }
        this.ausgabeOrt = `${this.adresse.strasse}, ${this.adresse.plz} ${this.adresse.ort}`;
      } else {
        this.ausgabeOrt = "Geschäftsstelle";
      }

      const time = new Date();
      this.datum = time.toLocaleString();
      this.bestaetigt = true;
    }
  }
}).mount("#app");