/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

var[name, test] = fakeUseState();

function Counter(props){
  const {
    initCount = 0, 
  } = props; 
  const [count, setCount] = React.useState(initCount);
  // let [count, setName] = React.useState('');
  const atClikc = () => { 
    setCount = (count + 1); //私有變數就是自己所擁有的，別人不能修改<
    // setName = ('BigDad')  //私有變數是有一個componet的
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}> +1 </button>
    </div>
  );
  
}

ReactDOM.render(
  <div>
  <Counter/>
  <Counter/>
  </div>
  ,
  document.getElementById('app')
);

  /*
  const [count, setCount] = React.useState(0); 設定一個私有變數
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}>+1</button>
    </div>
  );
  // */
