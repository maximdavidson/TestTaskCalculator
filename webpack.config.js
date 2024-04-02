module.exports = {
   entry: './src/index.js', // входной файл
   output: {
     filename: 'main.js', // выходной файл
     path: path.resolve(__dirname, 'dist'), // папка для выходного файла
   },
   mode: 'development', // режим сборки
 };
 