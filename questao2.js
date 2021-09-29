const team = [['Mateus', 'React.js'], ['Eduardo', 'Node.js'], ['Manoel', 'PHP']];
const result = handleTeam(team);

function handleTeam(team) {
    let json = team.map(function(x) {
        return {    
            "name": x[0],
            "tech": x[1],
            "intro": x[0] + ' is a ' + x[1] + ' expert'
            // x = valor
        }
    })
    console.log(json);
}

// objeto de estudo https://stackoverflow.com/questions/14397927/2-dimensional-array-to-object-javascript
// .map pega cada elemento do array e devolve uma array que no caso é o valor X 
// [0] e [1] corresponde a posição que estamos pegando da array  e no intro eu só concateno cada posição com a frase que queremos exibir
// o let usei para que o código seja lido apenas na chave e junto com o json para criar o objeto