function alterarcor() {
    var body = document.body;
    if (body.classList.contains('bodyColor')) {
        body.classList.remove('bodyColor');
        body.classList.add('bodysecundario');
    } else{
        body.classList.remove('bodysecundario');
        body.classList.add('bodyColor');
    }
}