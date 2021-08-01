module.exports = function(grunt){
    grunt.initConfig({
        concat: {
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            },
            css:{
                src:['css/*.css'],
                dest:'build/styles.css'
            }
        },
        uglify:{
            build:{
                src:'build/scripts.js',
                dest:'build/scripts.js'
            },
            
                src:'build/styles.css',
                dest:'build/styless.css'
                
            

        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}