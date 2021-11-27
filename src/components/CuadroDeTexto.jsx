// import React, {useState} from "react";
// import { Button } from "@mui/material";
//import { TextField } from "@mui/material";

//function CuadroDeTexto(props){
// //Uso de un objeto junto con hooks para cambiar multiples parametros
//     const[parametros, setParametros] = useState({
//         busqueda: "",
//         fecha1:"" ,
//         fecha2:"",
//         estado: "33",
//         numQuery: "0"
//     });
    
//     function actualizaBusqueda(event){
//         //Debe accionarse cada que cambia un valor en los textField
//         const {value, name} = event.target;
        
//         //Return de objeto permite cambiar los valores de los parametros
//         setParametros(prevValue =>{
//             /*si propiedad name = "busqueda" 
//             convierte todos los parametros a su value anterior
//             y transforma el actual(busqueda) al value actual*/
//             if (name === "busqueda"){
//                 return{
//                     busqueda:value,
//                     fecha1: prevValue.fecha1,
//                     fecha2: prevValue.fecha2
//                 }
//             }else if (name=== "fecha1"){
//                 return{
//                     busqueda:prevValue.busqueda,
//                     fecha1: value,
//                     fecha2: prevValue.fecha2
//                 }
//             }else if (name=== "fecha2"){
//                 return{
//                     busqueda:prevValue.busqueda,
//                     fecha1: prevValue.fecha1,
//                     fecha2: value
//                 }
//             }
//         });
//         console.log(parametros.busqueda);
//         console.log(parametros.fecha1);
//         console.log(parametros.fecha2);
//     }

//     function consoleText(){
//         //Fechas con horas(para fetch):
//         const nuevaFecha1 = parametros.fecha1 + " 00:00:00.0" ;
//         const nuevaFecha2 = parametros.fecha2 + " 23:59:59.0";

//         console.log(nuevaFecha1);
//         console.log(nuevaFecha2);
//         console.log(parametros); 
//     }

//     return(
//         <form>
//             <h1>
//             busqueda: {parametros.busqueda}
//             </h1>
//             <h2>
//             fecha final: {parametros.fecha2}, fecha inicial {parametros.fecha1}
//             </h2>
            
//             <TextField 
//             margin = "normal"        
//             maxRows={1}
//             name="busqueda"
//             onChange={actualizaBusqueda}
//             helperText={parametros.busqueda}
//             placeholder= {props.placeholder}
//             sx={{marginX:1}}
//             variant="outlined"
//             />
            
//             <Button
//             margin = "normal" 
//             sx={{mt:3, marginX:1, paddingX:2}}
//             onClick={consoleText}
//             >{props.textoBoton}</Button>
            
//             <TextField 
//             name="fecha1"
//             helperText="Fecha inicial"
//             margin = "normal"
//             onChange = {actualizaBusqueda}
//             sx={{marginX:1}}
//             type="date"
//             variant="outlined"/>

//             <TextField 
//             name="fecha2"
//             helperText="Fecha final"
//             margin = "normal"
//             onChange={actualizaBusqueda}
//             sx={{marginX:1}}
//             type="date"
//             variant="outlined"/>
//         </form>);




//export default CuadroDeTexto;