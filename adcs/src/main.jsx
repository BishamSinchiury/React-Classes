import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
    <main>
        <img src="src/assets/react.svg" alt="" />
        <h1>All of the react Students</h1>
        <ul>
            <li>Aavash Sapkota</li>
            <li>Aakriti Pokheral</li>
            <li>Aanikit Ganesh</li>
            <li>Bibek Bishwakarma</li>
            <li>Pranish Sitoula</li>
            <li>Sugita Karki</li>
        </ul>
    </main>
)
