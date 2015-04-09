function clear_all(except_id){
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
      'URL to Save/Share:',
      'http://iterami.com/repositories/BaseConverter.htm/?'
        + document.getElementById(36).value
    );
}

function update_all(base){
    if(document.getElementById(base).value.length <= 0){
        clear_all();
    }

    var id = 0;
    var loop_counter = 34;
    do{
        id = loop_counter + 2;

        if(base != id){
            document.getElementById(id).value = parseInt(
              document.getElementById(base).value,
              base
            ).toString(id);

            if(document.getElementById(id).value == 'NaN'){
                document.getElementById(id).value = '';
            }
        }

        // Check if base input has any illegal characters.
        var maxkey = document.getElementById(id).value.toLowerCase();
        if(maxkey.length > 0){
            maxkey = maxkey.split('').sort()[maxkey.length - 1].charCodeAt(0);

            if((loop_counter < 9 && maxkey > 49 + loop_counter)
              || maxkey > 88 + loop_counter){
                // If it does, hide impossible results.
                clear_all(base);
                return;
            }
        }
    }while(loop_counter--);
}

window.onload = function(){
    // Fetch saved base36 value.
    document.getElementById(36).value = window.location.search.substring(1);
    update_all(36);

    var id = 0;
    var loop_counter = 34;
    do{
        id = loop_counter + 2;

        document.getElementById(id).oninput = function(e){
            update_all(this.id);
        };
    }while(loop_counter--);
};
