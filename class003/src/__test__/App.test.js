import {render, fireEvent} from "@testing-library/react"
import App from "../App"



describe("App",()=>{
    test("the form should be render properly",()=>{
        const {getByText} = render(<App/>)
       getByText(/Nombre de la tarea/i)
       getByText(/Descipcion de la tarea/i)
       fireEvent.click(/Guardar tarea/i)
    })
})