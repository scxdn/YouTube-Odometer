var cmm = '12345678';
var raw = 0;
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var n6 = 0;
var n7 = 0;
var n8 = 0;
var n9 = 0;
var m = '100m';
var id = window.location.href.split('?')[1] || 'UCzFJ9ZkjYpxWTSqX9cVXj4g'
var url = 'https://v6.mixerno.space/api/youtube-channel-counter/user/'
var path = 'data.counts[0].count'
function spl(n) {
    n = ''+n+''   
    return n.split('', 9)
}



function settype(n) {
    if (n < 1000000000) {
        m = '100m'
        document.querySelector("#odo1a").style.display = "inline-block"
        document.querySelector("#odo2a").style.display = "inline-block"
        document.querySelector("#odo3a").style.display = "inline-block"
        document.querySelector("#odo4a").style.display = "inline-block"
        document.querySelector("#odo5a").style.display = "inline-block"
        document.querySelector("#odo6a").style.display = "inline-block"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "inline-block"
        document.querySelector("#comma2a").style.display = "inline-block"
    }
    if (n < 100000000) {
        m = '10m'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "inline-block"
        document.querySelector("#odo3a").style.display = "inline-block"
        document.querySelector("#odo4a").style.display = "inline-block"
        document.querySelector("#odo5a").style.display = "inline-block"
        document.querySelector("#odo6a").style.display = "inline-block"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "inline-block"
        document.querySelector("#comma2a").style.display = "inline-block"
    } 
    if (n < 10000000) {
        m = '1m'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "inline-block"
        document.querySelector("#odo4a").style.display = "inline-block"
        document.querySelector("#odo5a").style.display = "inline-block"
        document.querySelector("#odo6a").style.display = "inline-block"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "inline-block"
        document.querySelector("#comma2a").style.display = "inline-block"
    }
    if (n < 1000000) {
        m = '100k'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "none"
        document.querySelector("#odo4a").style.display = "inline-block"
        document.querySelector("#odo5a").style.display = "inline-block"
        document.querySelector("#odo6a").style.display = "inline-block"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "none"
        document.querySelector("#comma2a").style.display = "inline-block"
    }
    if (n < 100000) {
        m = '10k'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "none"
        document.querySelector("#odo4a").style.display = "none"
        document.querySelector("#odo5a").style.display = "inline-block"
        document.querySelector("#odo6a").style.display = "inline-block"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "none"
        document.querySelector("#comma2a").style.display = "inline-block"
    }
    if (n < 10000) {
        m = '1k'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "none"
        document.querySelector("#odo4a").style.display = "none"
        document.querySelector("#odo5a").style.display = "none"
        document.querySelector("#odo6a").style.display = "inline-block"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "none"
        document.querySelector("#comma2a").style.display = "inline-block"
    }
    if (n < 1000) {
        m = '100'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "none"
        document.querySelector("#odo4a").style.display = "none"
        document.querySelector("#odo5a").style.display = "none"
        document.querySelector("#odo6a").style.display = "none"
        document.querySelector("#odo7a").style.display = "inline-block"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "none"
        document.querySelector("#comma2a").style.display = "none"
    }
    if (n < 100) {
        m = '10'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "none"
        document.querySelector("#odo4a").style.display = "none"
        document.querySelector("#odo5a").style.display = "none"
        document.querySelector("#odo6a").style.display = "none"
        document.querySelector("#odo7a").style.display = "none"
        document.querySelector("#odo8a").style.display = "inline-block"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "none"
        document.querySelector("#comma2a").style.display = "none"
    }
    if (n < 10) {
        m = '1'
        document.querySelector("#odo1a").style.display = "none"
        document.querySelector("#odo2a").style.display = "none"
        document.querySelector("#odo3a").style.display = "none"
        document.querySelector("#odo4a").style.display = "none"
        document.querySelector("#odo5a").style.display = "none"
        document.querySelector("#odo6a").style.display = "none"
        document.querySelector("#odo7a").style.display = "none"
        document.querySelector("#odo8a").style.display = "none"
        document.querySelector("#odo9a").style.display = "inline-block"
        document.querySelector("#comma1a").style.display = "none"
        document.querySelector("#comma2a").style.display = "none"
    }
    return m
}


function getdata(a) {
    fetch(url + a).then(res => res.json()).then(data => {
        cmm = spl(data.counts[0].count)
        raw = data.counts[0].count
        return cmm
    })
}

function render() {
    settype(raw)
    if (m == '100m') {
          odo1a.innerHTML = cmm[0]
    odo2a.innerHTML = cmm[1]
    odo3a.innerHTML = cmm[2]
    odo4a.innerHTML = cmm[3]
    odo5a.innerHTML = cmm[4]
    odo6a.innerHTML = cmm[5]
    odo7a.innerHTML = cmm[6]
    odo8a.innerHTML = cmm[7]
    odo9a.innerHTML = cmm[8]
    }
    if (m == '10m') {
        odo2a.innerHTML = cmm[0]
        odo3a.innerHTML = cmm[1]
        odo4a.innerHTML = cmm[2]
        odo5a.innerHTML = cmm[3]
        odo6a.innerHTML = cmm[4]
        odo7a.innerHTML = cmm[5]
        odo8a.innerHTML = cmm[6]
        odo9a.innerHTML = cmm[7]
    }
    if (m == '1m') {
        odo3a.innerHTML = cmm[0]
        odo4a.innerHTML = cmm[1]
        odo5a.innerHTML = cmm[2]
        odo6a.innerHTML = cmm[3]
        odo7a.innerHTML = cmm[4]
        odo8a.innerHTML = cmm[5]
        odo9a.innerHTML = cmm[6]
    }
    if (m == '100k') {
        odo4a.innerHTML = cmm[0]
        odo5a.innerHTML = cmm[1]
        odo6a.innerHTML = cmm[2]
        odo7a.innerHTML = cmm[3]
        odo8a.innerHTML = cmm[4]
        odo9a.innerHTML = cmm[5]
    }
    if (m == '10k') {
        odo5a.innerHTML = cmm[0]
        odo6a.innerHTML = cmm[1]
        odo7a.innerHTML = cmm[2]
        odo8a.innerHTML = cmm[3]
        odo9a.innerHTML = cmm[4]
    }
    if (m == '1k') {
        odo6a.innerHTML = cmm[0]
        odo7a.innerHTML = cmm[1]
        odo8a.innerHTML = cmm[2]
        odo9a.innerHTML = cmm[3]
    }
    if (m == '100') {
        odo7a.innerHTML = cmm[0]
        odo8a.innerHTML = cmm[1]
        odo9a.innerHTML = cmm[2]
    }
    if (m == '10') {
        odo8a.innerHTML = cmm[0]
        odo9a.innerHTML = cmm[1]
    }
    if (m == '1') {
        odo9a.innerHTML = cmm[0]
    }
}
setTimeout(() => {
    getdata(id)
render()
}, 100);
setTimeout(() => {
    getdata(id)
render()
}, 500);
setInterval(() => {
    getdata(id)
    render()
}, 2000);