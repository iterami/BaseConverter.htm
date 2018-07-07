'use strict';

function clear_all(){
    if(window.confirm('Clear?')){
        clear_bases();
    }
}

function clear_bases(except_id){
    except_id = except_id || -1;

    var id = 0;
    var loop_counter = 34;
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
    var base_value = document.getElementById(base).value;
    if(base_value.length <= 0){
        clear_bases();
    }

    var id = 0;
    var loop_counter = 34;
    do{
        id = loop_counter + 2;
        var value = '';

        if(base != id){
            value = Number.parseInt(
              base_value,
              base
            ).toString(id);

            if(value == 'NaN'){
                value = '';
            }

            document.getElementById(id).value = value;
        }
    }while(loop_counter--);
}
