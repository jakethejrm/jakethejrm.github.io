import { useEffect, useState } from 'react';
import './App.css';
import UnderConstruction from './components/UnderConstruction';

function App() {
    // state to hold if I am online on discord
    const [isOnline, setIsOnline] = useState(false);

    // runs every 10 seconds and checks if I am online on discord via the widget api
    useEffect(() => {
        const interval = setInterval(async () => {
            console.log('This will run every 10  seconds!');
            await fetch('https://discord.com/api/guilds/831330423967711242/widget.json')
                .then((res) => res.json())
                .then((json) => {
                    if (json.members.length > 0) {
                        setIsOnline(true);
                    } else {
                        setIsOnline(false);
                    }
                });
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return <UnderConstruction />;
}

export default App;
