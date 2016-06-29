var fs = require("fs");
var Handlebars = require("handlebars");

module.exports = {
	render: render
};

function render(resume) {
	i18n = resume.i18n || [];
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");

	Handlebars.registerHelper("i18n", function(value) {
		return i18n[value] || value;
	});
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

Handlebars.registerHelper("nl2br", function(value) {
	return (value || "").replace(/\n/g, "</p><p>");
});
