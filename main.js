document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://easy-erin-trout-sock.cyclic.app/api/${topper}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.first
    }catch(error){
        console.log(error)
    }
}