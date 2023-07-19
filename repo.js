'use strict';

function clear_all(){
    if(globalThis.confirm('Clear?')){
        clear_bases();
    }
}

function clear_bases(except_id){
    except_id = except_id || -1;

    let id = 0;
    let loop_counter = 34;
    do{
        id = loop_counter + 2;

        if(id !== except_id){
            document.getElementById(id).value = '';
        }
    }while(loop_counter--);
}

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

function save(){
    globalThis.prompt(
      'URL:',
      globalThis.location.protocol
        + '//' + globalThis.location.host
        + globalThis.location.pathname
        + '?' + document.getElementById(36).value
    );
}

function update_bases(base){
    const base_value = document.getElementById(base).value;
    if(base_value.length === 0){
        clear_bases();
    }

    let id = 0;
    let loop_counter = 34;
    do{
        id = loop_counter + 2;
        let value = '';

        if(base !== id){
            value = Number.parseInt(
              base_value,
              base
            ).toString(id);

            if(isNaN(value)){
                value = '';
            }

            document.getElementById(id).value = value;
        }
    }while(loop_counter--);
}
