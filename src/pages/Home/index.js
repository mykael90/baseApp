import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

export default function Home() {
  const dispatch = useDispatch();

  const valorBotao = useSelector((state) => state.example.botaoClicado);

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  const customId = 'custom-id-success';

  const notify = (e) => {
    e.preventDefault();
    toast.success('Oieeeee', {
      toastId: customId,
    });
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <button type="button" onClick={handleClick}>
          Botao Clicado
        </button>
        <h1>{valorBotao ? 'Clicado' : 'Não clicado'}</h1>
        <br />
        <br />
        <button type="button" onClick={notify}>
          Oieeee
        </button>
      </div>
    </>
  );
}
