$('document').ready(function(){
    let b=$('<button>xx</button>')

    let tb = a()
    $('body').append(tb)
})

function a(){
    let table = $('<table></table>')

    var DATA = data;
    let s=['type', 'name', 'author', 'link']
    for(let i=0; i<10; i++){
        let tr = $('<tr></tr>')
        for(let j=0; j<3; j++){
            let td = $('<td></td>')
            td.text(DATA[i][j])
            tr.append(td)
        }
        table.append(tr)
    } 

    return table
}
