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

document.getElementById(2).oninput = function(e){
    update_all(2);
};

document.getElementById(3).oninput = function(e){
    update_all(3);
};

document.getElementById(4).oninput = function(e){
    update_all(4);
};

document.getElementById(5).oninput = function(e){
    update_all(5);
};

document.getElementById(6).oninput = function(e){
    update_all(6);
};

document.getElementById(7).oninput = function(e){
    update_all(7);
};

document.getElementById(8).oninput = function(e){
    update_all(8);
};

document.getElementById(9).oninput = function(e){
    update_all(9);
};

document.getElementById(10).oninput = function(e){
    update_all(10);
};

document.getElementById(11).oninput = function(e){
    update_all(11);
};

document.getElementById(12).oninput = function(e){
    update_all(12);
};

document.getElementById(13).oninput = function(e){
    update_all(13);
};

document.getElementById(14).oninput = function(e){
    update_all(14);
};

document.getElementById(15).oninput = function(e){
    update_all(15);
};

document.getElementById(16).oninput = function(e){
    update_all(16);
};

document.getElementById(17).oninput = function(e){
    update_all(17);
};

document.getElementById(18).oninput = function(e){
    update_all(18);
};

document.getElementById(19).oninput = function(e){
    update_all(19);
};

document.getElementById(20).oninput = function(e){
    update_all(20);
};

document.getElementById(21).oninput = function(e){
    update_all(21);
};

document.getElementById(22).oninput = function(e){
    update_all(22);
};

document.getElementById(23).oninput = function(e){
    update_all(23);
};

document.getElementById(24).oninput = function(e){
    update_all(24);
};

document.getElementById(25).oninput = function(e){
    update_all(25);
};

document.getElementById(26).oninput = function(e){
    update_all(26);
};

document.getElementById(27).oninput = function(e){
    update_all(27);
};

document.getElementById(28).oninput = function(e){
    update_all(28);
};

document.getElementById(29).oninput = function(e){
    update_all(29);
};

document.getElementById(30).oninput = function(e){
    update_all(30);
};

document.getElementById(31).oninput = function(e){
    update_all(31);
};

document.getElementById(32).oninput = function(e){
    update_all(32);
};

document.getElementById(33).oninput = function(e){
    update_all(33);
};

document.getElementById(34).oninput = function(e){
    update_all(34);
};

document.getElementById(35).oninput = function(e){
    update_all(35);
};

document.getElementById(36).oninput = function(e){
    update_all(36);
};
