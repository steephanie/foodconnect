export interface CardProps {
    title: string;
    location: string;
    address: string;
    availability: string;
    onClick?: () => void;
    color?: '#41245C' | 'transparent'
    colorBorder?: '#41245C' | 'white'
    textStyle?: 'center' | 'flex-start';
}