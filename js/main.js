'use strict';

function repo_init(){
    core_repo_init({
      'title': 'BaseConverter.htm',
    });

    // Create inputs.
    var output = '<input id=clear-all type=button value=Clear><input id=save type=button value=Save><br>';
    for(var i = 2; i < 19; i++){
        output += i + '<input id=' + i + '><br>';
    }
    document.getElementById('left').innerHTML = output;
    output = '';
    for(i = 19; i < 37; i++){
        output += i + '<input id=' + i + '><br>';
    }
    document.getElementById('right').innerHTML = output;

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

    document.getElementById('clear-all').onclick = clear_all;
    document.getElementById('save').onclick = save;
}