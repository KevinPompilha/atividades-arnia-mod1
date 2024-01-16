const alterarPlano = () =>{
    const alterarPreco = document.querySelector('#hobby')
    alterarPreco.innerHTML = '$45'

    const alterarPrecoGrowth = document.querySelector('#growth')
    alterarPrecoGrowth.innerHTML = '$100'

    const alterarPrecoBussiness = document.querySelector('#bussiness')
    alterarPrecoBussiness.innerHTML = '$150'

    const alterarPrecoEntreprise = document.querySelector('#entreprise')
    alterarPrecoEntreprise.innerHTML = '$200'

    const anual = document.querySelectorAll('.anual')
    anual.innerHTML = '/ per year'

    console.log(anual)

}