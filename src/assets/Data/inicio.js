const getAge = () => {
    const date = new Date();
    let age = date.getFullYear() - 2001;

    if (
        date.getMonth() + 1 < 9 ||
        (date.getMonth() + 1 == 9 && date.getDate() < 12)
    ) {
        age--;
    }

    return age;
};

export const inicio = {
    text: `Olá, meu nome é Hudson! Tenho ${getAge()} anos e sou apaixonado por programação. Tive meu primeiro contato com esse mundo em 2017 quando estava cursando informáfica no ensino médio, desde então, não parei mais e continuei estudando e me desenvolvendo nessa área. Em 2021, ingressei no curso de Bacharelado em Tecnologia da Informação pela UFRN e tive a oportunidade de aprimorar meus conhecimentos sobre tecnologia e todo esse universo da computação.`,
};
