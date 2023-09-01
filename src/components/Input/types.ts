export interface InputProps {
    placeholder?: string;
    onChangeText?: (text: string) => void;
    value?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad'; // Ou outros tipos de teclado que você deseja suportar
}