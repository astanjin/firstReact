function Header(props){
    return (
        <div>
        <h2>Welcome to Fullstack Development-1</h2>
        <p>React Js Programming Week09 Lab Exercise</p>
        <h3>{props.id}</h3>
        <h4>{props.name}</h4>
      </div>
    )}
    export default Header