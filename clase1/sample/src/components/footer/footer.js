const Footer =(props)=>{

    return(
        <>
        <footer>
            <p>Author: Hege Refsnes</p>
            <p><a href="mailto:hege@example.com">hege@example.com</a></p>
            <h1>  los datos son {props.datos}  </h1>
        </footer>
        </>
    )

}

export default Footer