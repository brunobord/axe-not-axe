function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function() {
    var language = window.navigator.userLanguage || window.navigator.language;
    var lang = getParameterByName('lang').replace('/', '') || language.split('-');

    var doc = 'axe-not-axe.md';
    if (lang == 'fr') {
        doc = 'hache-pas-hache.md';
    }
    $.get(doc, function(html) {
        $('#content').html(marked(html));
    });
})
