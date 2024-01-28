import { useEffect, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router'


export type ListObject = {
    id : number
    nome: string
}

interface IProps {
    active: number
 }

const Tab  : React.FC<IProps>= (IProps)  =>{
    
    const navigate = useNavigate();

    const [listNotas, setListNotas] = useState<ListObject[]>([])

    const handleEditor = (notaId : number) =>{
        navigate("/editor", { state:{notaId : notaId}})
        window.location.reload()
    }

    const handleCloseTab = (notaId : number)=>{
        var notas = localStorage.getItem("open-tabs");
        if(notas != null && notas != undefined){
            var array: ListObject[] = JSON.parse(notas);
            array = array.filter( nota => nota.id != notaId)
            setListNotas(array)
            localStorage.setItem("open-tabs", JSON.stringify(array))
            navigate("/home")
        }
    }


useEffect(() =>{
        var notas = localStorage.getItem("open-tabs");
        if(notas != null && notas != undefined){
            setListNotas(JSON.parse(notas));
        }
}, [])


    return (
        <>
           {listNotas.map( nota => {
                return(
                <>
                    <div className={"open-note "+ (IProps.active == nota.id ? 'open-note-active' : '')} key={nota.id}>
                        <button onClick={() =>{handleEditor(nota.id)}}>{nota.nome}</button> <span onClick={() => {handleCloseTab(nota.id)}}>X</span>    
                    </div>
                </>
                )
            })}
        </>    
    )
}

export default Tab;