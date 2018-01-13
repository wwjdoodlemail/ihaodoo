function p( what ){
    console.log( what );
}


function getBookHref(a){
    var atype = a.href.split('?')[1].split('&')[0];
    var ebook = ['M=book', 'M=Share'];
    if(ebook.includes(atype)){
        return true;
    }else{
        return false
    }
}


function flagEBook(){
    // 1- 标示所有可下载的链接
    var allA = $('a')
    
    // 循环优化，针对一些旧版本浏览器
    for(var i=allA.length-1; i>=0; i--){
        if(getBookHref(allA[i])){
            var style = {'border': 'solid 1px', 'border-radius': '3px'};
            $(allA[i]).css( style );
        }           
    }
}


function initTooltip(){
    var tooltip = $('<div id="tooltip"></div>');
    var style = {
        'position': 'absolute',
        'top': '100px',
        'left': '100px',
        'display': 'inline',
        'opacity': '0.8',
        'background': 'yellow'
    };

    var caption = $('<label id="caption"></label>');
    tooltip.append(caption);

    var etypes = ['updb', 'prc', 'mobi', 'epub']
    for(var i=0; i<etypes.length; i++){
        var item = makeDownloadItem(etypes[i]);
        tooltip.append(item);
    }
    tooltip.css(style);
    
    $('body').append(tooltip);
}
function makeDownloadItem( name ){
    var label = $('<label></label>').text(name);
    var input = $('<input type="checkbox">');
    var container = $('<div></div>');
    container.append(label);
    container.append(input);
    return container;
}

function preprocess( evt ){
    if(evt.target.nodeName === 'A'){
        if(getBookHref( evt.target )){
            showHelper(evt.target)
        }else{
            p(evt.target.href)
        }
    }
}
function showHelper(tgt){
    var top = $(tgt).position().top;
    var left = $(tgt).position().left + parseInt($(tgt).css('width'), 10);
    $('#tooltip #caption').text( tgt.innerText );
    $('#tooltip').css('top', top)
    $('#tooltip').css('left', left)
    //$('#tooltip').show()
    p('---------------');
    p(tgt);
}


$('document').ready(function(){
    flagEBook();
    initTooltip();
    $('body').mouseover( preprocess );
});
