let nbr1 = Number (prompt('nombre1'));
let operateur = prompt('opreateur ,+ - / * ');
let nbr2 = Number(prompt('nombre2')) ;
let reslt1 = nbr1 + nbr2 ;
let reslt2 = nbr1 - nbr2 ;
let reslt3 = nbr1 / nbr2 ;
let reslt4 = nbr1 * nbr2 ;
switch (operateur) {
    case "+":
        alert(nbr1 + '+' + nbr2 +'='+ reslt1)
        break;
    case "-":
        alert(nbr1 + '-' + nbr2 +'='+ reslt2)
        break;
    case "/":
        alert(nbr1 + '/' + nbr2 +'='+ reslt3)
        break;
    case "*":
        alert(nbr1 + '*' + nbr2 +'='+ reslt4)
        break;
    default:
        alert('Entrez les bonnes données')
        break;
}