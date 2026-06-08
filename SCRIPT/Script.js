const filmes = [
    {
        titulo: "Vingadores Ultimato",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao: "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências"
    },
    {
        titulo: "Homem aranha: sem volta pra casa",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/xaKydnMw6wR1MBAjS5seGPVusbs.jpg",
        descricao: "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha."
    },
    {
        titulo: "Leo",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/gSOVog7ydsaF1YpgAqBqnKYFGY.jpg",
        descricao: "Uma comédia musical que narra o último ano do Ensino Fundamental pelos olhos do lagarto Leo, o bichinho de estimação da sala."
    },
    {
        titulo: "Como mágica",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/7FBnCkYzHlVHEtuzTEiGgFhs8EQ.jpg",
        descricao: "Uma pequena criatura da floresta e um pássaro majestoso trocam de corpo e precisam se unir para sobreviver à aventura mais incrível de suas vidas."
    },
    {
        titulo: "Davi",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/kr5Owq7ixs2gsOMZm1MferN8qZX.jpg",
        descricao: "Em um reino tomado pelo medo e pela opressão, um jovem pastor de ovelhas decide enfrentar um gigante guerreiro e a escuridão que o acompanha. Com nada além de fé, coragem, uma funda e algumas pedras nas mãos, ele desafia um império e desperta o coração de uma nação."
    },
    {
        titulo: "Ratatouile",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/41Co0TRUJNyvjr2vHBEcAKAEFpX.jpg",
        descricao: "Remy, morador de Paris, aprecia boa comida e tem um paladar bastante sofisticado. Ele adoraria se tornar um chef para poder criar e desfrutar de obras-primas culinárias para o deleite de seu coração. O único problema é que Remy é um rato. Quando acaba no esgoto debaixo de um dos melhores restaurantes de Paris, o roedor gourmet encontra-se na posição ideal para realizar o seu sonho."
    },
]
const ListaFilmes = document.getElementById("ListaFilmes");
function mostrarFilmes(lista){
    ListaFilmes.innerHTML = ""
    lista.forEach(filme => {
        ListaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${filme.titulo}</h3>
                         <p>${filme.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo, filme.descricao}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
        Swal.fire({
            title: titulo,
            text:"Mais informações do filme",
            icon: "info"
        })
}