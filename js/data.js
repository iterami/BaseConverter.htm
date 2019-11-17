'use strict';

function clear_all(){
    if(window.confirm('Clear?')){
        clear_bases();
    }
}

function clear_bases(except_id){
    except_id = except_id || -1;

    let id = 0;
    let loop_counter = 34;
    do{
        id = loop_counter + 2;

        if(id != except_id){
            document.getElementById(id).value = '';
        }
    }while(loop_counter--);
}

function save(){
    window.prompt(
      'URL:',
      window.location.protocol
        + '//' + window.location.host
        + window.location.pathname
        + '?' + document.getElementById(36).value
    );
}

function update_bases(base){
    let base_value = document.getElementById(base).value;
    if(base_value.length <= 0){
        clear_bases();
    }

    let id = 0;
    let loop_counter = 34;
    do{
        id = loop_counter + 2;
        let value = '';

        if(base != id){
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
