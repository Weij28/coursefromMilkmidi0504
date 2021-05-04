function FunctionalCard(props){  // component接受參數的唯一方法，是由props取得。
  
  /* // TODO1  */

  const {
    img, name, children 
  } = props; 
  return (
    <div className="card">
      <img className="img" scr={img}/>
      <div className="name">name:{name}</div>
      <div className="quote">quote:{children}</div>
    </div>
  );
}

ReactDOM.render(
  <div className="app">
    <div />
    <FunctionalCard
    img="http://fakeimg.pl/300x100/ecf0f1/"
    count="0"
    bool={false}
    name="weihsin" /> 

    <FunctionalCard
    img="http://fakeimg.pl/240x80/ecf0f1/"
    name="大頭">
    <h1>我是子元素</h1>  
    </FunctionalCard>
  </div>,
  document.getElementById('app')
)
  // const {
  //   img, name, children
  // } = props;
  // return (
  //   <div className="card">
  //     <img className="img" src={img} />
  //     <div className="name">name:{name}</div>
  //     <div className="quote">quote:{children}</div>
  //   </div>
  // );
  // */






// ReactDOM.render(
//   /* // TODO2
//   <div className="app">
//     <FunctionalCard
//       img="http://fakeimg.pl/300x100/ecf0f1/"
//       name="milkmidi" />
//     <FunctionalCard
//       img="http://fakeimg.pl/240x80/ecf0f1/"
//       name="奶綠茶">
//       <h1>我是子元素</h1>
//     </FunctionalCard>
//   </div>
//   // */
//   ,
//   document.getElementById('app')
// );