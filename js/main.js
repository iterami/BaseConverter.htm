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
      'title': 'BaseConverter.htm',
    });

    let output = '';
    for(let i = 2; i < 37; i++){
        output += '<tr><td><a href=#' + i + '>' + i + '</a><td><textarea id=' + i + '></textarea>';
    }
    document.getElementById('bases').innerHTML = output;

    document.getElementById(36).value = globalThis.location.search.substring(1);
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
