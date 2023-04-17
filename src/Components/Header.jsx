 import '@styles/header.css';
 function Header({children}){

  return(
  <header>
    <div className="header-content">
       {children}
      {/* {name &&   <p className=" element-title">Sistema First Class</p>} */}
    </div>
  </header>
  )
 }

 export default Header;