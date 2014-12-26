module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        includes: {
            mock: {
                options: {
                    includeRegexp: /^(\s*)\/\/\s*mockfile\s+['"](\S+)['"]\s*$/
                },
                files: [{
                    expand: true,
                    filter: 'isFile',
                    cwd: 'src',
                    src: '**/*',
                    dest: 'dist'
                }]
            }
        },
        clean: {
            dist: {
                src: ['dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-includes');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'includes']);
};
