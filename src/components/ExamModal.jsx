import React, { useEffect } from 'react';

export default function ExamModal({ open, onClose, onConfirm, children }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            aria-hidden={!open}
            role="dialog"
            aria-labelledby="modal-title"
        >
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative">
                {/* Modal Content */}
                <h2 id="modal-title" className="text-lg font-semibold mb-4">
                    Confirmación
                </h2>
                <div className="mb-4">{children}</div>
                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={onConfirm}
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
}
