import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../Services/api';

export default function NewIncident () {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory();

    async function handleNewIncident(e) {
      e.preventDefault();

      const data = {
        title,
        description,
        value
      };

      try {
        await api.post("incidents", data, {
          headers: {
            Authorization: ongId,
          }
        });
        history.push("/profile");
      } catch (err) {
        alert("Erro ao cadastrar o usuário, tente novamente.");
      }
    }

    return (
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img className="logo2" src={logoImg} alt="Be The Hero" />
            <h1>Cadastro novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontro um herói pra
              resolve-lo.
            </p>
            <Link className="back-link" to="/profile">
              <FaArrowLeft className="icon" size={20} color="#E02041" />
              Voltar para home
            </Link>
          </section>
          <form onSubmit={handleNewIncident}>
            <input
              placeholder="Título do caso"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              placeholder="Valor em reais"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    );
    
}