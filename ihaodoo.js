function a(){
    let main = $('<div id="tip"></div>')
    let css = {
    'border': 'solid 1px yellow',
    'border-radius': '5px',
    'background': '#EEEEEE',
    }
    let s = ['updb', 'prc', 'mobi', 'epub', 'zhi epub']
    for(let i=0; i<s.length; i++){
        let opt0 = $('<input type="checkbox"/>')
        opt0.click(function(){
            p('bb')                
        })
        main.append(opt0)
        main.append($('<label>'+s[i]+'</label>'))
        main.append($('<br>'))
    }
    main.css(css)
    $('body').append(main)
    return main
}

function p( what ){
    console.log( what )
}

function $qa( what ){
    return document.querlSelectorAll( what )
}

$('document').ready(function(){
})

function getbook(){
    let allA = $qa('a')

    for(var i=allA.length; i>0; i--){
    }
}

/*
$('document').ready(function(){
    $('body').keydown(function(){
        p(event) 
        if(event.key === 'z'){
            p('inject!')
            myfun()
        }
        //console.log(event)
    })
})

function myfun(){
    $('body').mouseover(function(x){
        p('ax')
    })
}
*/
/*
$('document').ready(function(){
    let min_win = a()
    
    $('body').mouseover(function(x){
        p('aix')
        let tgt = x.target
        if(x.target.nodeName === 'A'){
            p('aaa')
        }
        if(x.target.nodeName === 'AA'){
            p(x)
            p(tgt)
            //p(x.offsetX)
            //p("O "+x.target.offsetTop)
            //p("O "+x.target.offsetLeft)
            //p("O "+x.target.offsetWidth)
            //p("C "+x.target.clientTop)
            //p("s "+x.target.scrollTop)
            //p('py:'+x.pageY)
            //p(x.clientX)
            min_win.css('display', 'inline')
            //let tipX = tgt.offsetLeft + tgt.offsetWidth
            let tipX = tgt.screenX
            let tipY = tgt.offsetTop + tgt.offsetWidth/2
            min_win.css('left', tipX + 'px')
            min_win.css('top', tipY + 'px')
            //min_win.show()
            //min_win.text(x.target.href)
            //p(x.target.href)
        }else{
            if(tgt.id === 'tip'){
                //min_win.css('display', 'inline')
            }else{
                //min_win.css('display', 'none')
            }
        }
    })
})
*/
function quick_download(){
    // 
}
