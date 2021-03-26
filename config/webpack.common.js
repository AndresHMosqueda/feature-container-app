module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};

// The goal of the loader is to tell webpack to processs some different files as we start
// to import them into our project
// Babel is going to be in charge of proccessing all of our code from ES15 and turn it into regular S5 code that can be easily executed inside a typical browser

//@babel/preset-react means that babel is going to process all the JSX and transform it to ES5
// @babel/plugin-transform-runtime  so that we can use asyn/await syntax
