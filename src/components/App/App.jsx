import React from "react"
import { palettes } from "../../palettes.js"
import { Palette } from "../Palette/Palette.jsx"

export const App = () => (
    <div className="container">
        <header>
            <h1>Barevné palety</h1>
        </header>
        <main>
            {palettes.map((palette) => <Palette key={palette.name} paletteData={palette} />)}
        </main>
        <footer>
            <p>Czechitas, Digitální akademie: Web</p>
        </footer>
    </div>
)
