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
                    
                    <div className="text-center text-xl">
                        🍺 vs 🏃
                    </div>

                    {/* comptadors */}
                    <div className="flex gap-4 justify-center">
                        
                        {/* comptador de cerveses */}
                        <div className="text-center border flex flex-col">
                            <div>Cerveses</div>
                            <div>{cerveses}</div>
                        </div>

                        {/* comptador de kms */}
                        <div className="text-center border flex flex-col">
                            <div>Quilòmetres</div>
                            <div>{kms}</div>
                        </div>
                    </div>

                    {/* diferència entre cerveses i kms */}
                    <div className="text-center border">
                        <div>Diferència</div>
                        <div>{kms - cerveses}</div>
                    </div>

                    {/* botó de sumar cerveses */}
                    <div className="text-center">
                        <button className="border cursor-pointer" onClick={() => setCerveses(cerveses + 1)}>
                            Sumar Cerveses
                        </button>
                        🍺
                        <button className="border cursor-pointer" onClick={() => setCerveses(cerveses - 1)}>
                            Restar Cerveses
                        </button>
                    </div>

                    {/* botó de sumar kms */}
                    <div className="text-center">
                        <button className="border cursor-pointer" onClick={() => setKms(kms + 1)}>
                            Sumar Kms
                        </button>
                        🏃
                        <button className="border cursor-pointer" onClick={() => setKms(kms - 1)}>
                            Restar Kms
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default App;
