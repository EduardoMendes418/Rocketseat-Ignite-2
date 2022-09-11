import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/Fechar.svg'
import entradasImg from '../../assets/Entradas.svg'
import saidasImg from '../../assets/Saidas.svg'
import { useTransactions } from '../../hooks/useTransactionsContext';
import { FormEvent, useState } from 'react';


interface NewTransationModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({ isOpen, onRequestClose }: NewTransationModal) {
    const { createTransaction } = useTransactions();

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('')

   async function handlerCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

      await  createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handlerCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                placeholder="Titulo" 
                value={title} 
                onChange={event => setTitle(event.target.value)} 
                />

                <input 
                placeholder="Valor" 
                type="number" 
                value={amount} 
                onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit'); }}
                        isActive={type == 'deposit'}
                        activeColor="green"
                    >
                        <img src={entradasImg} alt="Entradas" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw'); }}
                        isActive={type == 'withdraw'}
                        activeColor="red"
                    >
                        <img src={saidasImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                placeholder="Categoria" 
                value={category} 
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    );
}