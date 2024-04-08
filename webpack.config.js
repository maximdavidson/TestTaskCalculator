// const path = require('path');


// module.exports = {
//   entry: './src/index.js', // Входной файл
//   output: {
//     filename: 'main.js', // Выходной файл
//     path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
//   },
//   mode: 'development', // Режим сборки
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'], // Указывает расширения файлов, которые будет обрабатывать webpack
//     alias: {
//       '@components': path.resolve(__dirname, './src/components'),
//     }
//   }
// };


  // "scripts": {
  //   "start": "react-app-rewired start",
  //   "build": "react-app-rewired build",
  //   "test": "react-app-rewired test",
  //   "eject": "react-scripts eject"
  // },