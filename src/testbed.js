/**
 * Created by jjones on 3/10/2021.
 */

function buildList(items, className) {
    const $ul = $('<ul>');
    if(className) {
        $ul.class(className);
    }

    items.forEach((i) => {
        const $li = $('<li>');
        if(i instanceof $) {
            $li.append(i);
        } else {
            $li.text(i);
        }
        $ul.append($li);
    });

    return $ul;
}



function stringy(obj, props) {
    let $result = $('<div>', { class: 'stringy_obj'} );
    props.forEach((p) => {
        if(obj.hasOwnProperty(p)) {
            $result.append($('<span>', { class: 'prop', text: `${p}: ` }));
            $result.append($('<span>').text(obj[p]));
            //result += `${p}: ${object[p]} `;
        }
    });
    return $result;
}


function displayResult(result) {
    $('#result').html(result);
}


