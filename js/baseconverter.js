function clear_all(){
    document.getElementById(2).value = '';
    update_all(2);
}

function save(){
    prompt(
      'URL to Save/Share:',
      'http://iterami.com/repositories/BaseConverter/?'
        + document.getElementById(36).value
    );
}

function update_all(base){
    var loop_ids = 0;

    var loop_counter = 34;
    do{
        loop_ids = loop_counter + 2;

        if(loop_counter != base - 2){
            document.getElementById(loop_ids).value = parseInt(
              document.getElementById(base).value,
              base
            ).toString(loop_ids);

            if(document.getElementById(loop_ids).value == 'NaN'){
                document.getElementById(loop_ids).value = '';
            }
        }
    }while(loop_counter--);
}

// fetch saved base36 value
document.getElementById(36).value = window.location.search.substring(1);
update_all(36);

window.onkeyup = function(e){
    if(document.activeElement.tagName == 'INPUT'){
        var key = window.event ? event : e;
        key = String.fromCharCode(key.charCode ? key.charCode : key.keyCode);

        // only handle alphanumeric key presses
        if(key.match(/^[a-z0-9]+$/i)){
            // limit available characters based on base
            var available = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(
              0,
              parseInt(document.activeElement.id)
            );

            // check if pressed key is available
            // if it is, update all bases
            if(available.indexOf(key) > -1){
                update_all(document.activeElement.id);

            // else, blank all bases
            }else{
                var loop_ids = 0;

                var loop_counter = 34;
                do{
                    loop_ids = loop_counter + 2;
                    if(loop_ids != document.activeElement.id){
                        document.getElementById(loop_ids).value = '';
                    }
                }while(loop_counter--);
            }
        }
    }
};
