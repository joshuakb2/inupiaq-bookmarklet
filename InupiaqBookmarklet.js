(function() {
    let formTarget = '_self';

    if (window.location.hostname + window.location.pathname != 'ankn.uaf.edu/ANL/mod/glossary/view.php') {
        //  We could be anywhere. Various security policies will screw up the behavior
        //  of this bookmarklet, and we also don't want to navigate away from whatever
        //  the user might be doing. Open a new page and execute this script from there.
        //
        let beforeSearch = "data:text/html,<html><head><title>Searching...</title><script>";
        let afterSearch = "</script></head><body>Searching...<script>formTarget='_blank';window.onload=" + search.name + ";</script></body></html>"

        let URI = beforeSearch + search.toString() + afterSearch;

        let iframe = document.createElement('IFRAME');
        iframe.src = URI;
        iframe.style.display = 'hidden';
        document.body.appendChild(iframe);
    }
    else {
        search();
    }

    function search() {
        let form = document.createElement('FORM');
        form.style="display: none";
        form.action = 'http://ankn.uaf.edu/ANL/mod/glossary/view.php';
        form.target = formTarget;
        form.method = 'POST';
        
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
    }
}());
