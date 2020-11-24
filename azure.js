const {BlobServiceClient} = require('@azure/storage-blob')
const {v1: uuid} = require('uuid')

async function main() {
    // console.log('test download in azure')
    // Retrieve the connection string for use with the application. The storage
// connection string is stored in an environment variable on the machine
// running the application called AZURE_STORAGE_CONNECTION_STRING. If the
// environment variable is created after the application is launched in a
// console or with Visual Studio, the shell or application needs to be closed
// and reloaded to take the environment variable into account.
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
}

async function 

main().then(() => console.log('done')).catch((ex) => console.log(ex.message))


