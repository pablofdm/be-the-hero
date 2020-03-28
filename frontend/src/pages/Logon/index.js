import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';
import { FaSignInAlt } from 'react-icons/fa';
import { Link, useHistory} from 'react-router-dom'
import api from '../../Services/api';

export default function Logon (){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
        
            history.push('/profile');
        } catch (err){
            alert("Falha no login.")
        }

    }

    return (
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} className="logomarca" alt="Be The Hero" />
          <form onSubmit={handleLogin}>
            <h1>Faça seu login:</h1>
            <input placeholder="Sua iD" value={id} onChange={e => setId(e.target.value)}/>
            <button className="button" type="submit">
              Entrar
            </button>
            <Link className="back-link" to="/register">
              <FaSignInAlt className="icon" size={20} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={heroesImg} alt="Heroes" />
      </div>
    );
}