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
      // Allgemeine Pflichtfelder prüfen
      if (!this.kleidung || !this.krisengebiet || !this.spendenart) {
        alert("Bitte füllen Sie alle Pflichtfelder aus.");
        return;
      }
    
      // Wenn Abholung gewählt ist, dann Adresse prüfen
      if (this.spendenart === "abholung") {
        if (!this.adresse.strasse || !this.adresse.plz || !this.adresse.ort) {
          alert("Bitte geben Sie eine vollständige Abholadresse an.");
          return;
        }
    
        if (!this.adresse.plz.startsWith("12")) {
          alert("Die Adresse liegt außerhalb des Abholbereichs.");
          return;
        }
    
        this.ausgabeOrt = `${this.adresse.strasse}, ${this.adresse.plz} ${this.adresse.ort}`;
      } else {
        // Übergabe an Geschäftsstelle
        this.ausgabeOrt = "Geschäftsstelle";
      }
    
      // Alles OK → Spende registrieren
      const time = new Date();
      this.datum = time.toLocaleString();
      this.bestaetigt = true;
    }
  }
}).mount("#app");