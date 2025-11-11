import { useState } from 'react';

export default function FormCita() {
  const [form, setForm] = useState({ pacienteId: '', medicoId: '', fecha: '', hora: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/citas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Cita registrada con éxito');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <input name="pacienteId" placeholder="ID Paciente" onChange={handleChange} />
      <input name="medicoId" placeholder="ID Médico" onChange={handleChange} />
      <input name="fecha" type="date" onChange={handleChange} />
      <input name="hora" type="time" onChange={handleChange} />
      <button type="submit">Registrar Cita</button>
    </form>
  );
}
