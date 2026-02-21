import { useState } from 'react'
import { Button } from "@repo/ui/button";
import { RootMFE } from "@repo/mfe-next";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Vite Main Application (Shell)</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Main App Count: {count}
                </button>
                <p>
                    This is the primary application built with Vite.
                </p>
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', border: '2px dashed #646cff', borderRadius: '8px' }}>
                <h2>Microfrontend (MFE) Area</h2>
                {/* We'll import the MFE from the internal package */}
                <RootMFE title="MFE Loaded from internal package!" />
            </div>

            <div style={{ marginTop: '2rem' }}>
                <Button appName="Main-Vite">Shared UI Button</Button>
            </div>
        </div>
    )
}

export default App
