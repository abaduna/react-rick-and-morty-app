const Header =(props)=>{

    const {title, name,edad,altura} = props
    return ( 
    <div>
        <h3>{title}</h3>
        <span>el nombre es {name}</span>
        <p>Esto es mi header</p>
        <h3>La edad es {edad}</h3>
        <p>Altura {altura < 1.4 && "soy un pinguiono"}</p>
    </div>
    )
   
}


export default Header;