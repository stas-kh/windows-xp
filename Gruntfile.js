module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					browserifyOptions: {
						debug: true
					},
					transform: [
						["babelify", {
							presets: ["es2015"]
						}]
					]
				},
				files: {
					"./dist/js/desktop-app.js": ["./app/js/index.js"]
				}
			}
		},
		sass: {
			dist: {
				files: {
					"./dist/css/desktop-app.css": ["./app/css/style.scss"]
				}
			}
		},
		watch: {
			scripts: {
				files: ["./app/js/**/*.js"],
				tasks: ["browserify"]
			},
			css: {
				files: ["./app/css/**/*.scss"],
				tasks: ["sass"]
			}
		},
		copy: {
			files: {
				cwd: "app/assets/",
				src: '**/*',
				dest: 'dist/assets',
				expand: true
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("default", ["browserify", "sass", "copy", "watch"]);
};