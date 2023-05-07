import './styles/App.css';
import Header from './scripts/Header'
import Content from './scripts/Content'


function App() {
  return (
    <div className="main-container">
      <div className='inner-container box'>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
