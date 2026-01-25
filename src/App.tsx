import './App.css'
import ThemeProvider from './context/Theme/ThemeProvider';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className='bg-background text-foreground min-h-screen'>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </ div>
  );
}