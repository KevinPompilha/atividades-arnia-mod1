function obterData(){
    const data = new Date()

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    return data.toLocaleDateString('pt-BR',options)
}
const diaDaSemana = obterData()
console.log(diaDaSemana) 