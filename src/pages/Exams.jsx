import React, { useState } from 'react';
import { englishFunction } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export default function Exams() {
    const { exams, toggleModal, openModal } = englishFunction();
    const navigate = useNavigate();
    const [selectedExam, setSelectedExam] = useState(null);

    const handleExamClick = (exam) => {
        setSelectedExam(exam);
        toggleModal(); // Abrir el modal
    };

    const handleModalConfirm = () => {
        if (selectedExam) {
            toggleModal()
            navigate(`/exam/${selectedExam.id}`)
        }
    };

    return (
        <div className="pl-4 pr-4 pt-2 mb-5 w-full h-full">
            <div className="bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black">
                <p>Aquí están todos los exámenes que tengo en la base de datos</p>

                <div className="border-2 border-xustomBlue rounded-md mt-4">
                    <div className="bg-xustomBlue">
                        <p className="text-white font-semibold text-center p-2">
                            Exams
                        </p>
                    </div>
                    {exams && exams.length > 0 ? (
                        exams.map((exam, index) => (
                            <div
                                key={index}
                                className="p-2 cursor-pointer"
                                role="button"
                                onClick={() => handleExamClick(exam)}
                                tabIndex={0} // Para permitir la interacción con teclado
                                onKeyDown={(e) => e.key === 'Enter' && handleExamClick(exam)}
                            >
                                <p className="">
                                    {exam.name}
                                </p>
                                {index < exams.length - 1 && <hr className="my-2" />}
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron exámenes.</p>
                    )}
                </div>
            </div>

            {/* Modal de Confirmación */}
            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Confirmar Examen</h2>
                        <p>¿Estás seguro de que deseas continuar con el examen?</p>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-red-600"
                                onClick={toggleModal}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={handleModalConfirm}
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
