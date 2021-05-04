// TODO: 1 start

class MyComponent extends React.Component {
  render(){
    return(
      <div>
        這是functionalComponent組件
      </div>
    );
  }
}

function FunctionalComponent(){
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br />
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}





/* 
class MyComponent extends React.Component {
  render() {       extend 繼承：物件導向程式語言的基本技能
    超級馬力：吃完蘑菇變大後的大馬力，他的所有能力全部都繼承自小馬力原有的狀態

    return (
      <div className="my-component">   這裡是JSX的語法
        這是ReactComponent組件
      </div>
    );
  }
}
// */
// TODO: 1 end

// TODO: 2 start
/*
function FunctionalComponent(){
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br/>
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}
// */
// TODO: 2 end

// TODO:3 start
/*
ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
);
// */
// TODO:3 end