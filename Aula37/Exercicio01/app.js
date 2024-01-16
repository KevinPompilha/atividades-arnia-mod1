const apiKey = 'FRcKERhbGgiYKBSEcWVxnWHf6Nof0CGV'
const cidade = 'http://dataservice.accuweather.com/locations/v1/search'
const clima = 'http://dataservice.accuweather.com/currentconditions/v1/'

const pesquisarClima = async () => {
    const pesquisaCidade = document.getElementById('local').value
    try {
        const local = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${pesquisaCidade}&apikey=FRcKERhbGgiYKBSEcWVxnWHf6Nof0CGV`);

        let dadosDaCidade = await local.json()
        console.log(dadosDaCidade)
        const cidadePesquisada = dadosDaCidade[0].Key
        console.log(cidadePesquisada)

        const pesquisarClima = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cidadePesquisada}?apikey=FRcKERhbGgiYKBSEcWVxnWHf6Nof0CGV`)

        const dadosDoClima = await pesquisarClima.json()

        document.getElementById('local').innerHTML = cidade[0].LocalizedName
        document.getElementById('tempo').innerHTML = dadosDoClima[0].WeatherText
        document.getElementById('temperatura').innerHTML = dadosDoClima[0].Temperature.Metric.Value + 'C'
        document.getElementById('data').innerHTML = new Date(dadosDoClima[0].LocalObservationDateTime).toLocaleDateString('pt-BR')


    } catch (error) {
        console.log(error)
    }

}

