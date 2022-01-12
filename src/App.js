import Button from "./components/Button";
import './components/style.css';

export default function App() {
  return (
    <div className="app">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '1.2rem'
      }}>
        <Button>
          Primary Button
        </Button>
        <Button type="solid">
          Primary Button
        </Button>
        <Button type="secondary">
          Primary Button
        </Button>
        <Button type="solid-secondary">
          Primary Button
        </Button>
      </div>
    </div>
  )
}