const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа вашего приложения
  output: {
    filename: 'mainweb.js', // имя выходного файла
    path: path.resolve(__dirname, 'dist'), // путь к каталогу выходных файлов
  },
  module: {
    rules: [
      {
        test: /\.js$/, // регулярное выражение, которое ищет все файлы .js
        exclude: /node_modules/, // исключает все файлы в каталоге node_modules
        use: {
          loader: 'babel-loader', // использует babel-loader для транспиляции вашего кода
        },
      },
    ],
  },
};