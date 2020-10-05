// This script allow us to update the proxy configuration only locally
// So other developers will not able to push only temporary configuration

const fs = require('fs')

function checkProxyFileExistsLocally() {
  if (!fs.existsSync('./src/setupProxy.js')) {
    console.error('-------')
    console.error('-------')
    console.error(
      'Please rename "src/setupProxy.example.js" to "src/setupProxy.js" so create react app scripts will handle rest of the work'
    )
    console.error('-------')
    console.error('-------')
    process.exit(1)
  }
}

checkProxyFileExistsLocally()
