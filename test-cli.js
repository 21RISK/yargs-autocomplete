#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
  })
  .command('curlAgain <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .help()
  .completion()
  .parse()


  /*



// #!/usr/bin/env node

//#!/usr/bin/env node --experimental-specifier-resolution=node
//#!/usr/local/share/nvm/versions/node/v16.13.1/bin/node --experimental-specifier-resolution=node

  */