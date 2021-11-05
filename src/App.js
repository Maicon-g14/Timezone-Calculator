import './styles/App.css';
import Logo from './scripts/Logo'
import ContentHeader from './scripts/ContentHeader'
import Content from './scripts/Content'

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <div className="content">
          <div className="grid-container">
            <div className="box center-screen">
              <Logo />
              <ContentHeader />
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
