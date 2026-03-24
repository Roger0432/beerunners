import './App.css';
import { useState } from 'react';

function App() {

    const [cerveses, setCerveses] = useState<number>(0);
    const [kms, setKms] = useState<number>(0);

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex justify-center items-start py-8 px-4 sm:px-6 lg:px-8">

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

                    {/* comptadors */}
                    <div className="flex flex-row gap-4 justify-center">

                        <button className="flex justify-center items-center rounded p-5 bg-yellow-100 w-1/2 cursor-pointer" onClick={() => setCerveses(cerveses + 1)}>
                            <div className="text-4xl">🍺</div>
                            <div className="text-xl text-gray-500 font-bold">Cervesa</div>
                        </button>

                        <button className="flex justify-center items-center rounded p-5 bg-blue-100 w-1/2 cursor-pointer" onClick={() => setKms(kms + 1)}>
                            <div className="text-4xl">🏃</div>
                            <div className="text-xl text-gray-500 font-bold">Córrer</div>
                        </button>

                    </div>




                    {/*
                     botó de sumar cerveses 
                    <div className="text-center w-full">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                            <button className="cursor-pointer rounded px-4 py-2 bg-yellow-100 text-yellow-500 font-bold w-full sm:w-44" onClick={() => setCerveses(cerveses + 1)}>
                                Sumar Cerveses
                            </button>
                            <span className="text-xl">🍺</span>
                            <button className="cursor-pointer rounded px-4 py-2 bg-yellow-100 text-yellow-500 font-bold w-full sm:w-44" onClick={() => setCerveses(cerveses - 1)}>
                                Restar Cerveses
                            </button>
                        </div>
                    </div>

                    botó de sumar kms
                    <div className="text-center w-full">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                            <button className="cursor-pointer rounded px-4 py-2 bg-blue-100 text-blue-500 font-bold w-full sm:w-44" onClick={() => setKms(kms + 1)}>
                                Sumar Kms
                            </button>
                            <span className="text-xl">🏃</span>
                            <button className="cursor-pointer rounded px-4 py-2 bg-blue-100 text-blue-500 font-bold w-full sm:w-44" onClick={() => setKms(kms - 1)}>
                                Restar Kms
                            </button>
                        </div>
                    </div>
                    */}

                </div>

            </div>
        </>
    );
}

export default App;
