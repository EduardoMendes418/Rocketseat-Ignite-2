import Modal from 'react-modal';
import { useState } from "react";
import { TransactionsProvider } from './hooks/useTransactionsContext';
import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransationModal } from './componentes/NewTransationModal';


Modal.setAppElement('#root');

export function App() {

  const [isNewTransaticonsModalOpen, setIsNewTransaticonsModalOpen] = useState(false)

  function handlerOpenNewTransaticonsModal() {
    setIsNewTransaticonsModalOpen(true)
  }

  function handlerCloseNewTransaticonsModal() {
    setIsNewTransaticonsModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTrasactionModal={handlerOpenNewTransaticonsModal} />
      <Dashboard />
      <NewTransationModal isOpen={isNewTransaticonsModalOpen} onRequestClose={handlerCloseNewTransaticonsModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

