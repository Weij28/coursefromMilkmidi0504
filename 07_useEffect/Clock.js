function Clock(){
  React.useEffect(() =>{
    console.log('componentDidMount')
    return ()=> {
      console.log('componentWillUnmount'); 

    }
  }, []); 

  return (
    <div className="my-component">
      <h1>！！大辱滑時代！！</h1>
    </div>
  )

}


// function Clock() {
//   React.useEffect(() => {
//     console.log('componentDidMount')
//     return () => {
//       console.log('componentWillUnmount');
//     }
//   }, []); 這邊一定要塞一個空陣列

//   return (
//     <div className="my-component">
//       <h2>react useEffect</h2>
//     </div>
//   )
// }
