function searchInBing(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://b00tc4mp.herokuapp.com/proxy?url=https://bing.com/search?q=${query}`, {}, '',
    (status, response) => {
        if (status === 200) {
            const doc = new DOMParser().parseFromString(response, "text/html")

            const results = doc.querySelectorAll('.b_algo')
            console.log(results)

            const res = Array.prototype.map.call(results, result => {
                const title = result.querySelector('h2').innerText
                console.log(title)

                const preview = result.querySelector('p').innerText

                const url = result.querySelector('a').href 

                return { title, url, preview}

            })

            callback(null, res)
        } else callback(new Error('sorry, cannot search:('))
    })
}