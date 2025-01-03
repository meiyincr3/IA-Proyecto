import React, { useState } from "react";

function RecommendationForm({ onCreate, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        range: { from: "", to: "" },
        description: "",
        category: "",
        duration: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "from" || name === "to") {
            setFormData({
                ...formData,
                range: { ...formData.range, [name]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos obligatorios
        if (!formData.name || !formData.city || !formData.range.from || !formData.range.to || !formData.duration) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        onCreate(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-3/5 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Crear Nueva Atracción</h2>
                <form onSubmit={handleSubmit}>
                    {/* Nombre */}
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Nombre <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Ciudad */}
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Ciudad <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Rango de Personas */}
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700">
                                Rango Desde <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="from"
                                value={formData.range.from}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700">
                                Rango Hasta <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="to"
                                value={formData.range.to}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Categoría */}
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Categoría <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            <option value="Naturaleza">Naturaleza</option>
                            <option value="Aventura">Aventura</option>
                            <option value="Cultura">Cultura</option>
                            <option value="Gastronomía">Gastronomía</option>
                            <option value="Entretenimiento">Entretenimiento</option>
                        </select>
                    </div>

                    {/* Duración */}
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Duración <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Selecciona una duración</option>
                            <option value="1 hora">1 hora</option>
                            <option value="1 hora y media">1 hora y media</option>
                            <option value="2 horas">2 horas</option>
                            <option value="2 horas y media">2 horas y media</option>
                            <option value="3 horas">3 horas</option>
                            <option value="3 horas y media">3 horas y media</option>
                            <option value="4 horas">4 horas</option>
                            <option value="4 horas y media">4 horas y media</option>
                            <option value="5 horas">5 horas</option>
                            <option value="5 horas y media">5 horas y media</option>
                            <option value="6 horas">6 horas</option>
                        </select>
                    </div>

                    {/* Descripción */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Descripción</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Breve descripción de la atracción"
                        ></textarea>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Crear Atracción
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecommendationForm;