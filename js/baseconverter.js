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

        if(id == except_id){
            continue;
        }

        document.getElementById(id).value = '';
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
            value = parseInt(
              base_value,
              base
            ).toString(id);

            if(value == 'NaN'){
                value = '';
            }

            document.getElementById(id).value = value;
        }

        // Check if base input has any illegal characters.
        var maxkey = value.toLowerCase();
        if(maxkey.length > 0){
            maxkey = maxkey.split('').sort()[maxkey.length - 1].charCodeAt(0);

            if((loop_counter < 9 && maxkey > 49 + loop_counter)
              || maxkey > 88 + loop_counter){
                // If it does, hide impossible results.
                clear_bases(base);
                return;
            }
        }
    }while(loop_counter--);
}

window.onload = function(){
    // Fetch saved base36 value.
    document.getElementById(36).value = window.location.search.substring(1);
    update_bases(36);

    var id = 0;
    var loop_counter = 34;
    do{
        id = loop_counter + 2;

        document.getElementById(id).oninput = function(e){
            update_bases(this.id);
        };
    }while(loop_counter--);
};
