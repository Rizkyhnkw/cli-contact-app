const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// Create folder if it doesn't exist
const dirpath = './data';
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

// Create contact.json file if it doesn't exist
const datapath = './data/contact.json';
if (!fs.existsSync(datapath)) {
  fs.writeFileSync(datapath, '[]', 'utf-8');
}

const loadcontact = () => {
  try {
    const filebuff = fs.readFileSync(datapath, 'utf-8');
    const datacontact = JSON.parse(filebuff);
    return datacontact;
  } catch (error) {
    console.error(chalk.red.inverse.bold('Error reading contacts data'), error);
    return [];
  }
};

const simpancontact = (nama, email, nohp) => {
  const contact = { nama, email, nohp };
  const datacontact = loadcontact();

  // Check for duplicate
  const duplikat = datacontact.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
    return false;
  }

  // Validate email
  if (email && !validator.isEmail(email)) {
    console.log(chalk.red.inverse.bold('Email tidak valid!'));
    return false;
  }

  // Validate phone number
  if (nohp && !validator.isMobilePhone(nohp, 'id-ID')) {
    console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'));
    return false;
  }

  datacontact.push(contact);

  try {
    fs.writeFileSync(datapath, JSON.stringify(datacontact));
    console.log(chalk.green.inverse.bold('Trims sudah memasukkan data!'));
  } catch (error) {
    console.error(chalk.red.inverse.bold('Error saving contact data'), error);
  }
};

const listcontact = () => {
  const datacontact = loadcontact();
  console.log(chalk.blue.inverse.bold('Daftar Kontak:'));
  datacontact.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.email} - ${contact.nohp}`);
  });
};

module.exports = { simpancontact, listcontact };
