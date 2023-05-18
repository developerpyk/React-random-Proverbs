import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["좌절감으로 배움을 늦추지 마라.","하루 공부하지 않으면, 그것을 되찾기 위해서는 이틀이 걸린다.", "이틀 공부하지 않으면, 그것을 되찾기 위해서는 나흘이 걸린다.","삶은 새로운 것을 받아들일 때만 발전한다.","삶은 신선해야 하고 결코 아는 자가 되지 말고, 언제까지나 배우는 자가 되어라.","마음의 문을 닫지 말고, 항상 열어 두도록 하라.","처음 배울 때 자신에게 약간의 스트레스를 가한다면, 그 뒤에 모든 일은 쉽고 재미있게 해 나갈 수 있는 것이다."]
  const getRandomIndex = (length) =>{
    return parseInt(Math.random() * length);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있다.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
