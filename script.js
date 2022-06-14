document.querySelector('.advance__button').addEventListener('click', ()=>{
    const all = document.querySelector('[text="all"]')
    const exact = document.querySelector('[text="exact"]')
    const any = document.querySelector('[text="any"]')
    const none = document.querySelector('[text="none"]')
    let endpoint = 'https://images.google.com/search?q='
    let search = false
    if (all.value !== ''){
        endpoint = endpoint + all.value
        search = true
    }
    if(exact.value !== ''){
        endpoint = endpoint + ' '+  exact.value
        search = true
    }
    if(any.value !== ''){
        endpoint = endpoint + ' "' + any.value + '"'
        search = true
    }
    if(none.value !== ''){
        endpoint = endpoint + ' -' + none.value
        search = true
    }
    if(search){
        window.location = endpoint
    }
})