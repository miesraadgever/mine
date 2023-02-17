import React, {lazy, Suspense} from 'react';
import Nav from "./components/Nav";
import "./styling/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video";
export interface IApplicationProps {}

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./components/Gallery'));
const Cc1996 = lazy(() => import('./pages/cc1996'));
const Nwaad = lazy(() => import('./pages/Nwaad'));
const KindAanZee = lazy(() => import('./pages/KindAanZee'));
const KazMerch = lazy(() => import('./pages/KazMerch'));
const Nostalgia = lazy(() => import('./pages/Nostalgia'));
const NostalgiaZee = lazy(() => import('./pages/NostalgiaZee'));
const Doek = lazy(() => import('./pages/Doek'));
const Mesh = lazy(() => import('./pages/Mesh'));
const Again = lazy(() => import('./pages/Again'));
const AlterEgo = lazy(() => import('./pages/AlterEgo'));
const Zinnen = lazy(() => import('./pages/Zinnen'));
const Iwiwf = lazy(() => import('./pages/Iwiwf'));
const DingenVergeet = lazy(() => import('./pages/DingenVergeet'));
const Audio = lazy(() => import('./pages/Audio'));
const Videos = lazy(() => import('./pages/Videos'));
const SheOtw = lazy(() => import('./pages/SheOtw'));
const Thoughts = lazy(() => import('./pages/Thoughts'));
const Braiding = lazy(() => import('./pages/Braiding'));
const Embody = lazy(() => import('./pages/Embody'));
const Party = lazy(() => import('./pages/Party'));
const Streets = lazy(() => import('./pages/Streets'));
const Torn = lazy(() => import('./pages/Torn'));
const TornMaybe = lazy(() => import('./pages/TornMaybe'));
const Glitteren = lazy(() => import('./pages/Glitteren'));
const Angel = lazy(() => import('./pages/Angel'));
const Sketches = lazy(() => import('./pages/Sketches'));
const Blendr = lazy(() => import('./pages/Blendr'));
const Excerpts = lazy(() => import('./pages/Excerpts'));
const Blauwdruk = lazy(() => import('./pages/Blauwdruk'));
const A0 = lazy(() => import('./pages/A0'));
const Wearables = lazy(() => import('./pages/Wearables'));
const InColor = lazy(() => import('./pages/InColor'));
const Florilegium = lazy(() => import('./pages/Florilegium'));
const Roman = lazy(() => import('./pages/Romance'));
const Droom = lazy(() => import('./pages/Droom'));
const Holetrap = lazy(() => import('./pages/Holetrap'));



const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
        <Suspense fallback={<div className='d-flex m-auto justify-content-center'><div>Loading....</div></div>}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Gallery />} />
          <Route path="/cc1996" element={<Cc1996 />} />
          <Route path="/nwaad" element={<Nwaad />} />
          <Route path="/kindAanZee" element={<KindAanZee />} />
          <Route path="/kindAanZee/merch" element={<KazMerch />} />
          <Route path="/nostalgia" element={<Nostalgia />} />
          <Route path="/nostalgiaZee" element={<NostalgiaZee />} />
          <Route path="/doek" element={<Doek />} />
          <Route path="/mesh" element={<Mesh />} />
          <Route path="/again" element={<Again />} />
          <Route path="/alterEgo" element={<AlterEgo />} />
          <Route path="/zinnen" element={<Zinnen />} />
          <Route path="/iwiwf" element={<Iwiwf />} />
          <Route path="/dingenVergeet" element={<DingenVergeet />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/sheOtw" element={<SheOtw />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path='/braiding' element={<Braiding />} /> 
          <Route path='/embody' element={<Embody />} />
          <Route path='/party' element={<Party />} />
          <Route path='/streets' element={<Streets />} />
          <Route path='/torn' element={<Torn />} />
          <Route path='/tornmaybe' element={<TornMaybe />} />
          <Route path='/glitteren' element={<Glitteren />} />
          <Route path='/angel' element={<Angel />} />
          <Route path='/sketches' element={<Sketches />} />
          <Route path='/blendr' element={<Blendr />} />
          <Route path='/excerpts' element={<Excerpts />} />
          <Route path='/blauwdruk' element={<Blauwdruk />} />
          <Route path='/a0' element={<A0 />} />
          <Route path='/wearables' element={<Wearables />} />
          <Route path='/incolor' element={<InColor />} />
          <Route path='/florilegium' element={<Florilegium />} />
          <Route path='/romance' element={<Roman />} />
          <Route path='/droom' element={<Droom />} />
          <Route path='/holetrap' element={<Holetrap />} />
          </Routes>
      </div>
      </Suspense>
    </BrowserRouter>
    
  );
};

export default App;
