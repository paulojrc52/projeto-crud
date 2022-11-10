const bcrypt = require('bcrypt')


async function crypto(pwb) {
    const salt = await bcrypt.genSalt()

    
    const password = await bcrypt.hash(pwb, salt)

    return password
}


module.exports = {
    crypto,
}
