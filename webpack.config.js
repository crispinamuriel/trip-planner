// Defines which file is the "starting point"—the javascript module where it will begin building
// A name and path for the output (our transformed / bundled JavaScript)
// Most developers don't write a new webpack config for every new project; they usually just re-use existing configurations.

module.exports = {
  mode: "development", // we're working in a dev environment right now, not production
  entry: './src/index.js', // the starting point for our program
  output: {
    path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
    filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  }
}
