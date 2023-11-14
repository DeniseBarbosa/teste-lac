let modalidades = [
    {
        nome: 'Musculação',
        slug: 'musculação',
        img: '/musculacao.jpg',
        content: 'Treino de musculação'
    },
    {
        nome: 'Crossfit',
        slug: 'crossfit',
        img: '/crossfit.jpg',
        content: 'Treino de crossfit'
    },
    {
        nome: 'Alongamento',
        slug: 'alongamento',
        img: '/alongamento.jpg',
        content: 'Treino de alonamento'
    },
    {
        nome: 'Exercicio em grupo',
        slug: 'exercicio em grupo',
        img: '/exer.jpg',
        content: 'Treino de exercicio em grupo'
    },
    {
        nome: 'Exercicio em grupo',
        slug: 'exercicio em grupo',
        img: '/exer.jpg',
        content: 'Treino de grupo'
    },

];
export function load({ params }) {
    let data = modalidades.find(e => e.slug ===
        params.slug);
    return data;
}