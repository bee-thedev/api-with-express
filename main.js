document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const topper = document.querySelector('input').value
    try{
        const response = await fetch(`https://easy-erin-trout-sock.cyclic.app/api/${topper}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.first
        document.querySelector('h3').innerText = data.last
        document.querySelector('h4').innerText = data.points

    }catch(error){
        console.log(error)
    }

    console.log("Hello there")
}