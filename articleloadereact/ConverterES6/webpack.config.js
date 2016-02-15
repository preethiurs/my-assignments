module.exports={
     entry : ["./converterES6Script.js"],   
     output : {
         filename: "bundle.js"
     },
   
    module : {
        loaders: [
             {
                test: /\.js$/,
                exclude :/node_modules/,
                loader: 'babel?presets[]=es2015'                
            }
        ]
        
    },  
    
    resolve : {
        extensions: ['','.js','.es6']
    },
    
}