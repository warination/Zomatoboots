const cityUrl = "http://zomatoajulypi.herokuapp.com/location";
const restUrl = "http://zomatoajulypi.herokuapp.com/restaurant?stateId=";

const getCity = async() =>{
    let response = await fetch(cityUrl,{method:"GET"})
    let data = await response.json()
    const cityName = document.querySelector('#cityname')


    data.map((item) =>{
        let eliment = document.createElement('option')
        let text =  document.createTextNode(item.state)
        eliment.value = item.state_id
        eliment.appendChild(text)
        document.querySelector('#city').appendChild(eliment)
        cityName.innerText = item.state
        
    })
}

// restaurent

const getRest = async() =>{

    let cityId= document.querySelector('#city').value
    let rest = document.querySelector('#restaurent')
    while(rest.length > 0){
        rest.remove(0)
    }

    let response = await fetch(`${restUrl}${cityId}`,{method:"GET"})
    let data = await response.json()

    data.map((item) =>{
        let eliment = document.createElement('option')
        let text =  document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        eliment.appendChild(text)
        rest.appendChild(eliment)
    })
}

