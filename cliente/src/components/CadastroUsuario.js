import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/usuarios';

function CadastroUsuario() {
    const [formData, setFormData] = useState({ nome: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, formData);
            alert('Usuário cadastrado com sucesso!');
            navigate('/');
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert('Erro ao cadastrar usuário. Verifique o console.');
        }
    };

    return (
        <div>
            <h2>Cadastro de Novo Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroUsuario;
