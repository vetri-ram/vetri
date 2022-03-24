const bcrypt = require('bcryptjs');

const saltRounds = 10;


const hashGenerate = async (plainPassword) =>{
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(plainPassword,salt);
      return hash;
}

const hashValidator = async (plainPassword,hashPassword) =>{
    const result = await bcrypt.compare(plainPassword,hashPassword);
    return result;
}


module.exports.hashGenerate = hashGenerate;
module.exports.hashValidator = hashValidator;
