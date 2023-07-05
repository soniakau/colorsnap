import './App.css';

function App() {
  return (
    <div className="App">
      {/* header includes the spinning logo + title */}
      <header className="App-header">
        <img src={require('./color-wheel.png')} className="App-logo" alt="logo" />
        <p className="App-title">
            ColorSnap
        </p>
      </header>
      <div className="container">
        {/* left div is for the upload section */}
        <div className="App-upload">
          <h1 className='section-title'> upload your image here </h1>
        </div>
        {/* right div is for the rendering section */}
        <div className="App-render">
          <h1 className='section-title'> color palette </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
