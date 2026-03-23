import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [cerveses , setCerveses] = useState(0);
    const [kms, setKms] = useState(0);

    useEffect(() => {
        setCerveses(0);
    }, []);

    return (
        <>
            <div className="flex justify-center items-center">

                <div className="flex flex-col max-w-150 w-full gap-5">
                    
                    <div className="text-center text-xl text-gray-500 font-bold rounded p-5 bg-gray-200 w-105 mx-auto mt-5">
                        🍺 BEERUNNERS 🏃
                    </div>

                    {/* comptadors */}
                    <div className="flex gap-5 justify-center">
                        
                        {/* comptador de cerveses */}
                        <div className="text-center flex flex-col rounded p-5 bg-yellow-100 w-50">
                            <div className="text-yellow-500 font-bold">
                                <div>Cerveses</div>
                                <div>{cerveses}</div>
                            </div>
                        </div>

                        {/* comptador de kms */}
                        <div className="text-center flex flex-col rounded p-5 bg-blue-100 w-50">
                            <div className="text-blue-500 font-bold">
                                <div>Quilòmetres</div>
                                <div>{kms}</div>
                            </div>
                        </div>
                    </div>

                    {/* diferència entre cerveses i kms */}
                    <div className="text-center rounded p-5 bg-red-100 w-105 mx-auto">
                        <div className="text-red-500 font-bold">
                            <div>Diferència</div>
                            <div>{kms - cerveses}</div>
                        </div>
                    </div>

                    {/* botó de sumar cerveses */}
                    <div className="text-center">
                        <button className="cursor-pointer rounded p-5 bg-yellow-100 text-yellow-500 font-bold w-50" onClick={() => setCerveses(cerveses + 1)}>
                            Sumar Cerveses
                        </button>
                        🍺
                        <button className="cursor-pointer rounded p-5 bg-yellow-100 text-yellow-500 font-bold w-50" onClick={() => setCerveses(cerveses - 1)}>
                            Restar Cerveses
                        </button>
                    </div>

                    {/* botó de sumar kms */}
                    <div className="text-center">
                        <button className="cursor-pointer rounded p-5 bg-blue-100 text-blue-500 font-bold w-50" onClick={() => setKms(kms + 1)}>
                            Sumar Kms
                        </button>
                        🏃
                        <button className="cursor-pointer rounded p-5 bg-blue-100 text-blue-500 font-bold w-50" onClick={() => setKms(kms - 1)}>
                            Restar Kms
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default App;
