import chai from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
