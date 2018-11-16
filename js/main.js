function ajax(options) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.open(options.methods, options.url)
        request.send()
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    request.getAllResponseHeaders()
                    let response = request.responseText
                    response = JSON.parse(response)
                    resolve(response)
                } else {
                    reject('error')
                }
            } else {
                // reject('some error')
            }
        }
    })
}

function renderDom(res) {
    console.log('renderDom===>', res)
}

function otherFunction(res) {
    console.log('这是renderdom之后第二个执行的函数===>>>',res)
}
const myBtn = document.querySelector('#mybtn')
myBtn.addEventListener('click', (e) => {
    ajax({
        url: 'http://rap2api.taobao.org/app/mock/117560/list',
        methods: 'GET'
    }).then(res => {
        renderDom(res)
        return res
    }).then(res => {
        otherFunction(res)
    })
})