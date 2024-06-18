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
  .command({
    command: "detail",
    describe: "Menampilkan detail sebuah contact",
    builder: {
      nama: {
        describe: 'nama lengkap',
        demandOption: true, 
        type: 'string',
      },
    },
    handler(argv) {
      contact.detailcontact(argv.nama );
    },
  })
  .command({
    command: "delete",
    describe: "Menghapus sebuah contact",
    builder: {
      nama: {
        describe: 'nama lengkap',
        demandOption: true, 
        type: 'string',
      },
    },
    handler(argv) {
      contact.deletecontact(argv.nama );
    },
  })
  .help()
  .argv;
