const Email = require('./email')
const SecretList = require('./santas-list')

function main() {
  const list = ['shant', 'katrina', 'aniboy', 'arek']

  const invalid = {
    shant: ['katrina']
    // katrina: ['shant'],
    // sehrope: ['arek'],
    // haig: ['taline', 'ani']
  }

  var mailOptions = {
    from: 'thesssak@gmail.com',
    // to: 'thesssak+butt@gmail.com',
    subject: 'export test',
    // text: 'export test'
  };

  console.log(SecretList.randomizeList(list, invalid))
  // console.log(isValid(null, null, invalid));

  // Email.sendEmail(mailOptions)
}

main()
