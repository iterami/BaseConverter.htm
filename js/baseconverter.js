function clear_all(){
    document.getElementById(2).value = '';
    update_all(2);
}

function save(){
    prompt(
      'URL to Save/Share:',
      'http://iterami.com/repositories/BaseConverter/?' + document.getElementById(36).value
    );
}

function update_all(base){
    var loop_counter = 34;
    var loop_ids = 0;

    // if the input we are going to update from isn't empty
    if(document.getElementById(base).value.length > 0){
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

    // else clear all inputs
    }else{
        do{
            loop_ids = loop_counter + 2;
            document.getElementById(loop_ids).value = '';
        }while(loop_counter--);
    }
}

// fetch saved base36 value
document.getElementById(36).value = window.location.search.substring(1);
update_all(36);

document.getElementById('event-delegator').addEventListener('input',function(e){
    update_all(e.target.id);
});
