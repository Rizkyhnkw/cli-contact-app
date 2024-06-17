const yargs = require("yargs");
const contact = require("./contact");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: 'string',
      },
      email: {
        describe: "Email",
        demandOption: true,
        type: 'string',
      },
      nohp: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      contact.simpancontact(argv.nama, argv.email, argv.nohp);
    },
  })
  .command({
    command: "list",
    describe: "Menampilkan semua nama & no HP contact",
    handler() {
      contact.listcontact();
    },
  })
  .help()
  .argv;
