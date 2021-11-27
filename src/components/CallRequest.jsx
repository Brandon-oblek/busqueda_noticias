import React, {useState, useEffect } from "react";
import axios from "axios";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, } from "@mui/material";

const Calls= (props) => {
    //PRINCIPIO DE CALLREQUEST

    const oblekUrl= "http://oblek.com.mx:8080/CygniWebService/cygni/piipeservice/piipepost"
    const jsonPlaceHolder = "https://jsonplaceholder.typicode.com/todos"


    const [parametrosDeBusqueda, setParametrosDeBusqueda] = useState({
        busqueda:"Una busqueda",
        fecha1:"2021-12-01",
        fecha2: "2021-11-01",
        estado: 33,
        numQuery: 0

    });

    const [data, setData] = useState({});

    const [inicio, setInicio] = useState(0); 

    useEffect(() => {
        //Añade las hrs a la peticion:
        if (parametrosDeBusqueda.fecha1.length < 21 ){
            parametrosDeBusqueda.fecha1 = parametrosDeBusqueda.fecha1 +" 00:00:00.0" ;
            
        }
        if (parametrosDeBusqueda.fecha2.length < 21){
            parametrosDeBusqueda.fecha2 = parametrosDeBusqueda.fecha2 +" 00:00:00.0" ;
        }

        console.log("estos son los parametros de busqueda: ", parametrosDeBusqueda);


        const consultaAPI = async()=>{
                const respuesta = await axios({
                    baseURL: jsonPlaceHolder,
                    method: "GET",
                    params:{
                        title:parametrosDeBusqueda.busqueda
                    }
                    });
                setData(respuesta.data)
                console.log("este es el data del hook: ", data);        
    
        }
        console.log("ESTOS SON LOS PARAMETROS DE BUSQUEDA DESDE USEEFFECT",parametrosDeBusqueda);
        consultaAPI();
      }, [inicio]);

    
    
    function actualizacionBusqueda(event){
        //Se LLAMA CADA QUE SE INTRODUCE UNA NUEVA LETRA O SE HACE CAMBIO A LOS CAMPOS        
    
        console.log(" FUNCION BUSQUEDA: ", parametrosDeBusqueda)
        const {value, name} = event.target;
        
        setParametrosDeBusqueda({...parametrosDeBusqueda,
            [name]:value})

        console.log(parametrosDeBusqueda.busqueda);
        console.log(parametrosDeBusqueda.fecha1);
        console.log(parametrosDeBusqueda.fecha2);
        
        console.log("ULTIMA IMPRESION DE FUNCION BUSQUEDA")
        console.log(parametrosDeBusqueda);
}


    return(
        <div>
            <form>
                <TextField 
                margin = "normal"        
                maxRows={1}
                name="busqueda"
                onChange={actualizacionBusqueda}
                helperText="introduce tu busqueda aquí"
                placeholder= {props.placeholder}
                sx={{marginX:1}}
                variant="outlined"
                />

                <TextField 
                name="fecha1"
                helperText="Fecha inicial"
                margin = "normal"
                onChange = {actualizacionBusqueda}
                sx={{marginX:1}}
                type="date"
                variant="outlined"/>

                <TextField 
                name="fecha2"
                helperText="Fecha Final"
                margin = "normal"
                onChange={actualizacionBusqueda}
                sx={{marginX:1}}
                type="date"
                variant="outlined"/>  

                <Button
                margin = "normal" 
                sx={{mt:3, marginX:1, paddingX:2}}
                onClick={()=> setInicio(inicio+1)}
                >{props.textoBoton}</Button>
            </form>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>{data.userId}</TableCell>
                        <TableCell align="right">{data.id}</TableCell>
                        <TableCell align="right">{data.title}</TableCell>
                        <TableCell align="right">{data.length}</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                  
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );

    //FIN DE CALLSREQUEST
}

export default Calls;