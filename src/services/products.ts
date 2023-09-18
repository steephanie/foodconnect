import api from './api'

export type ProductProps = {
    id: string;
    nome: string;
    img_url: string;
    km_localizacao: number;
    localizacao: string;
    informacoes_vaga: string;
    descricao_vaga: string;
    requisitos_01: string;
    requisitos_02: string;
    requisitos_03: string;
    requisitos_04: string;
    requisitos_05: string;
    requisitos_06: string;
}

type ResponseProps = {
    data: { restaurants: ProductProps[] }
}

export const getProducts = async (): Promise<ProductProps[]> => {
    try {
        const {
            data: { restaurants },
        }: ResponseProps = await api.get('/restaurants.json');
        console.log('Dados da API:', restaurants);
        return restaurants;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error;
    }
};


// export const getProducts = async (): Promise<ProductProps[]> => {
//     const {
//         data: { restaurants },
//     }: ResponseProps = await api.get('/restaurants.json')
//     return restaurants;
// };

