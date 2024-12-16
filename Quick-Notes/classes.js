// Classes Syntax
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hey I am ${this.name} and I am ${this.type}.`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`WEEEE I am ${this.name} and I am a ${this.type} type Wizard`);
  }
}

const healerWizard = new Wizard("Julie", "Healer");
const darkMagicWizard = new Wizard("Brad", "Dark Magic");
