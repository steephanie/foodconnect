export interface ButtonProps {
    title: string;
    onClick: () => void;
    color: '#41245C' | 'transparent'
    colorBorder?: '#41245C' | 'white'
    textStyle?: 'center' | 'flex-start';
}