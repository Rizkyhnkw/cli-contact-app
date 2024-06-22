// mengambil argumen dari cmd line
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// const {tulispertanyaan,simpancontact} = require('./contact')

// const main = async () => {
//   const nama = await  tulispertanyaan( 'Masukan Nama anda :');
//   const email = await tulispertanyaan('Masukan Email anda :');
//   const nohp = await  tulispertanyaan( 'Masukan No HP anda :');

//  simpancontact(nama, email, nohp)
// };

// main() 

// no Promise
// rl.question("masukan nama anda:", (nama) => {
//   rl.question("masukan no hp:", (nohp) => {
//     const contact = { nama, nohp };
//     const filebuff = fs.readFileSync('./data/contact.json', 'utf-8');
//     const datacontact = JSON.parse(filebuff);
//     datacontact.push(contact);

//     fs.writeFileSync('./contact.json', JSON.stringify(datacontact));
// rl.close();
// console.log('trims sudah memasukan data')
//   });
// });

// const pert2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("masukan email anda : ", (email) => {
//       resolve(email);
//     });
//   });
// };
// const pert3 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("masukan no hp anda : ", (nohp) => {
//       resolve(nohp);
//     });
//   });~
// };
// const tulispertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// };

const yargs = require("yargs");
const contact = require("./contact");

yargs
  .command({
    command: "add",
    describe: "menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: String,
      },
      email: {
        describe: "Email",
        demandOption: true,
        type: String,
      },
      nohp: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: String,
      },
    },
    handler(argv) {
      contact.simpancontact(argv.nama, argv.email, argv.nohp);
    },
  })
  .demandOption();

// menampilkan daftar semua nama contact
yargs.command({
  command: "list",
  describe: "menampilkan semua nama & no HP contact",
  handler() {
    contact.listcontact();
  },
});

yargs.parse();
// a
