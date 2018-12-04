'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'clear-all': {
          'onclick': clear_all,
        },
        'save': {
          'onclick': save,
        },
      },
      'info': '<input id=clear-all type=button value=Clear><input id=save type=button value=Save>',
      'menu': true,
      'title': 'BaseConverter.htm',
    });

    // Create textareas.
    let output = '';
    for(let i = 2; i < 37; i++){
        output += '<tr><td><a href=#' + i + '>' + i + '</a><td><textarea class=small id=' + i + '></textarea>';
    }
    document.getElementById('bases').innerHTML = output;

    // Fetch saved base36 value.
    document.getElementById(36).value = window.location.search.substring(1);
    update_bases(36);

    let id = 0;
    let loop_counter = 34;
    do{
        id = loop_counter + 2;

        document.getElementById(id).oninput = function(e){
            update_bases(this.id);
        };
    }while(loop_counter--);
}
