import outback from '../../assets/img/outback.png'
import juarez from '../../assets/img/juarez.png'
import urso from '../../assets/img/urso.png'

type ImageType = typeof urso | typeof outback | typeof juarez;

export interface CardProps {
    img: ImageType;
    title: string;
    location: string;
    address: string;
    availability: string;
    onClick?: () => void;
    color?: '#41245C' | 'transparent'
    colorBorder?: '#41245C' | 'white' | '#F1F1F1',
    textStyle?: 'center' | 'flex-start';
}