import './App.css';
import { useState } from 'react';

function App() {

    const [cerveses, setCerveses] = useState<number>(0);
    const [kms, setKms] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [localBeerCount, setLocalBeerCount] = useState<number>(0);
    const [isKmModalOpen, setIsKmModalOpen] = useState<boolean>(false);
    const [localKmCount, setLocalKmCount] = useState<number>(0);

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex justify-center items-start py-8 px-4 sm:px-6 lg:px-8 pb-32">

                <div className="flex flex-col w-full max-w-4xl gap-5">
                    
                    <div className="text-center text-2xl sm:text-3xl text-gray-100 font-bold rounded p-5 bg-gray-800 w-full mx-auto">
                        🍺 BEERUNNERS 🏃
                    </div>

                    {/* comptadors */}
                    <div className="flex flex-row gap-4 justify-center">
                        
                        {/* comptador de cerveses */}
                        <div className="text-center flex flex-col rounded p-5 bg-yellow-100 w-1/2">
                            <div className="text-yellow-500 font-bold text-3xl sm:text-4xl">{cerveses}</div>
                            <div className="text-gray-500">Cerveses</div>
                        </div>

                        {/* comptador de kms */}
                        <div className="text-center flex flex-col rounded p-5 bg-blue-100 w-1/2">
                            <div className="text-blue-500 font-bold text-3xl sm:text-4xl">{kms}</div>
                            <div className="text-gray-500">Quilòmetres</div>
                        </div>
                    </div>

                    {/* diferència entre cerveses i kms */}
                    <div className="text-center rounded p-5 bg-red-100 w-full">
                        <div className="text-3xl sm:text-4xl text-red-500 font-bold">
                            {kms - cerveses}
                        </div>  
                        <div className="text-gray-500">
                            {kms - cerveses > 0 ? (
                                    <div>🍻 Has de beure {Math.abs(kms - cerveses)} cerveses</div>
                                ) : kms - cerveses < 0 ? (
                                    <div>🥵 Has de correr {Math.abs(kms - cerveses)} kms</div>
                                ) : (
                                    <div>⚖️ Equilibri perfecte </div>
                                )}
                        </div>
                    </div>

                </div>

            </div>

            {/* botons que mostren o amaguen els botons de sumar i restar */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-5 border-t border-gray-700">
                <div className="flex flex-row gap-4 justify-center max-w-4xl mx-auto">

                    <button className="flex justify-center items-center rounded p-5 bg-yellow-100 w-1/2 cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <div className="text-3xl">🍺</div>
                        <div className="text-xl text-gray-500 font-bold">Cervesa</div>
                    </button>

                    <button className="flex justify-center items-center rounded p-5 bg-blue-100 w-1/2 cursor-pointer" onClick={() => setIsKmModalOpen(true)}>
                        <div className="text-3xl">🏃</div>
                        <div className="text-xl text-gray-500 font-bold">Córrer</div>
                    </button>
                </div>
            </div>


            {/* Modal per afegir cerveses */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-5 flex justify-center items-end z-50" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-gray-800 rounded-t-lg shadow-lg border border-gray-700 p-6 w-full max-w-sm mx-4 mb-4" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl font-bold text-white mb-6 text-center">🍺 Afegir Cerveses</h2>
                        
                        <div className="flex items-center justify-center mb-6">
                            <button 
                                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200" 
                                onClick={() => setLocalBeerCount(Math.max(0, localBeerCount - 1))}
                                aria-label="Restar una cervesa"
                            >
                                -
                            </button>
                            <input 
                                value={localBeerCount} 
                                onChange={(e) => setLocalBeerCount(Math.max(0, parseInt(e.target.value) || 0))} 
                                className="mx-4 text-center bg-yellow-100 text-yellow-800 font-bold text-xl w-20 h-12 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200" 
                                aria-label="Nombre de cerveses"
                            />
                            <button 
                                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200" 
                                onClick={() => setLocalBeerCount(localBeerCount + 1)}
                                aria-label="Sumar una cervesa"
                            >
                                +
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-5 gap-2 mb-6">
                            {[1, 2, 3, 5, 10].map(num => (
                                <button 
                                    key={num} 
                                    className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-bold py-3 rounded transition-colors duration-200" 
                                    onClick={() => setLocalBeerCount(num)}
                                    aria-label={`Afegir ${num} cerveses`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                        
                        <div className="flex gap-3">
                            <button 
                                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded transition-colors duration-200" 
                                onClick={() => { 
                                    setCerveses(cerveses + localBeerCount); 
                                    setIsModalOpen(false); 
                                    setLocalBeerCount(0); 
                                }}
                                disabled={localBeerCount === 0}
                            >
                                Afegir
                            </button>
                            <button 
                                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded transition-colors duration-200" 
                                onClick={() => { 
                                    setIsModalOpen(false); 
                                    setLocalBeerCount(0); 
                                }}
                            >
                                Cancel·lar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal per afegir quilòmetres */}
            {isKmModalOpen && (
                <div className="fixed inset-0 flex justify-center items-end z-50" onClick={() => setIsKmModalOpen(false)}>
                    <div className="bg-gray-800 rounded-t-lg shadow-lg border border-gray-700 p-6 w-full max-w-sm mx-4 mb-4" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl font-bold text-white mb-6 text-center">🏃 Afegir Quilòmetres</h2>
                        
                        <div className="flex items-center justify-center mb-6">
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200" 
                                onClick={() => setLocalKmCount(Math.max(0, localKmCount - 1))}
                                aria-label="Restar un quilòmetre"
                            >
                                -
                            </button>
                            <input 
                                value={localKmCount} 
                                onChange={(e) => setLocalKmCount(Math.max(0, parseInt(e.target.value) || 0))} 
                                className="mx-4 text-center bg-blue-100 text-blue-800 font-bold text-xl w-20 h-12 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                aria-label="Nombre de quilòmetres"
                            />
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200" 
                                onClick={() => setLocalKmCount(localKmCount + 1)}
                                aria-label="Sumar un quilòmetre"
                            >
                                +
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-5 gap-2 mb-6">
                            {[1, 2, 3, 5, 10].map(num => (
                                <button 
                                    key={num} 
                                    className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-3 rounded transition-colors duration-200" 
                                    onClick={() => setLocalKmCount(num)}
                                    aria-label={`Afegir ${num} quilòmetres`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                        
                        <div className="flex gap-3">
                            <button 
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition-colors duration-200" 
                                onClick={() => { 
                                    setKms(kms + localKmCount); 
                                    setIsKmModalOpen(false); 
                                    setLocalKmCount(0); 
                                }}
                                disabled={localKmCount === 0}
                            >
                                Afegir
                            </button>
                            <button 
                                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded transition-colors duration-200" 
                                onClick={() => { 
                                    setIsKmModalOpen(false); 
                                    setLocalKmCount(0); 
                                }}
                            >
                                Cancel·lar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default App;
