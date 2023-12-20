import {Route, Routes} from 'react-router-dom';
import {FirstLabView, FourthLabView, SecondLabView, StartView, ThirdLabView} from '../views';

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<StartView />} />
                <Route path="/first" element={<FirstLabView />} />
                <Route path="/second" element={<SecondLabView />} />
                <Route path="/third" element={<ThirdLabView />} />
                <Route path="/fourth" element={<FourthLabView />} />
            </Routes>
        </main>
    );
};
