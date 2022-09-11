
import logoImg from '../../assets/LogoMoney.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTrasactionModal: () => void;
}

export function Header({ onOpenNewTrasactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTrasactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}