import PromptSync from "prompt-sync";
 const prompt = PromptSync ()

const genero = String(prompt(`Olá, escolha o gênero do filme que gostaria de assistir: `))
.toLowerCase()

switch (genero){
    case 'ação': 
        console.log(`Favor dirigir-se à sala 1 para assistir seu filme de ${genero} Sr. (a)!`);
        break;
    case 'comédia':
        console.log(`Favor dirigir-se à sala 2 para assistir seu filme de ${genero} Sr. (a)!`);
        break;
    case 'terror':
        console.log(`Favor dirigir-se à sala 3 para assistir seu filme de ${genero} Sr. (a)!`);
        break;
    case 'animação':
        console.log(`Favor dirigir-se à sala 4 para assistir seu filme de ${genero} Sr. (a)!`);
        break;   
    default:
        console.log(`Sinto muito Sr. (a), mas não temos filmes deste gênero atualmente!`);
        
}
