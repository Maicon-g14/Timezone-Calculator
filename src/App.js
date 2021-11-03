import './styles/App.css';
import Logo from './Logo'
import ContentHeader from './ContentHeader'
import Content from './Content'

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
