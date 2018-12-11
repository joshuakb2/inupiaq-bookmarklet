(function() {
    let target = '_self';
    if (window.location.hostname + window.location.pathname != 'ankn.uaf.edu/ANL/mod/glossary/view.php') {
        target = '_blank';
    }
    
    let form = document.createElement('FORM');
    form.style="display: none";
    form.action = 'http://ankn.uaf.edu/ANL/mod/glossary/view.php';
    form.target = target;form.method = 'POST';
    
    let textInput = document.createElement('INPUT');
    textInput.type = 'text';
    textInput.name = 'hook';
    form.appendChild(textInput);
    
    let checkbox = document.createElement('INPUT');
    checkbox.type = 'checkbox';
    checkbox.name = 'fullsearch';
    checkbox.value = 1;
    checkbox.checked = 'checked';
    form.appendChild(checkbox);
    
    let id = document.createElement('INPUT');
    id.name = 'id';
    id.value = 20;
    form.appendChild(id);
    
    let mode = document.createElement('INPUT');
    mode.name = 'mode';
    mode.value = 'search';
    form.appendChild(mode);
    
    let query = prompt('What Inupiaq or English word/phrase would you like to search for?');
    
    if (query) {
        document.body.appendChild(form);
        textInput.value = query;
        form.submit();
    }
}());
