
import './App.css'
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers';
import NavBar from './components/NavBar';
import { Suspense } from 'react';


const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersPromise = fetchPlayers()

  return (
    <>
      <NavBar></NavBar>

      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App
