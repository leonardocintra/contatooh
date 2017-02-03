(function() {

    /** recebe o objeto grunt como parametro */
    module.exports = function(grunt) {
        grunt.initConfig({
            tarefa1: {
                /** configuracao da tarefa 1 */
            },
            tarefa2: {
                /** configuracao da tarefa 2 */
            }
        })

        grunt.loadNpmTasks('grunt-contrib-copy')
    }

})()