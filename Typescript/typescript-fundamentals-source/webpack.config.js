module.exports = {
    // Provide the path to our primary source file/module, into which
    // the rest of our modules get imported
    entry: './src/app.ts',
    output: {
        // Configure the details of our output file, once
        // the TypeScript compiler has finished transforming
        // our source into plain JavaScript
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        // Enable webpack to resolve .js and .ts files
        extensions: ['.ts', '.js']
    },
    module: {
        // Configure a so-called "loader", which will handle
        // passing our source code to the TypeScript compiler
        // behind the scenes.
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            }
        ]
    }
}