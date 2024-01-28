import './index.css'
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from '@mui/icons-material/Description';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Notas from "../Notas";

export type ListObject = {
    id : number
    nome: string
    dtAtualizacao : string
    directoryFatherId : number
}

interface IProps {
    list: ListObject[]
    icon: any
    filter: string
    search: string
    directoryFatherId : number
 }


const Directory : React.FC<IProps>= (IProps) =>{

    const searchList = IProps.list.filter((item) =>
        item.nome.toLowerCase().includes(IProps.search.toLowerCase()) || item.dtAtualizacao.toLowerCase().includes(IProps.search.toLowerCase()) 
    );


    
    const [listDirectory, setListDirectory] = useState([])
    const [listNotas, setListNotas] = useState([])

    const [clickedId, setClickedId] = useState(0)

    const handleLoadChildren = (directoryFatherId : number) =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/directory/list/'+directoryFatherId,config)
        .then((response)=>{
            setListNotas(response.data.listNotas)
            setListDirectory(response.data.listDirectory)
            setClickedId(directoryFatherId)
            console.log(response)
        })
        .catch((error)=>{
            alert("error")
        })
    }


    return(
        <>
        {searchList.map(item =>
            <>
                <div onClick={() =>{handleLoadChildren(item.id)}} key={item.id}>
                    <div className="container-directorys">
                        <div className="container-icon">
                            <div className="icon">
                                {IProps.icon}
                            </div>
                            <h4>{item.nome}</h4>
                        </div>
                        <h4>{item.dtAtualizacao}</h4>
                    </div>
                    <div className='children'>
                        { (item.directoryFatherId == IProps.directoryFatherId || clickedId == item.id) &&
                            <>
                                <Directory list={listDirectory} icon={<FolderIcon fontSize="small"/>} filter={IProps.filter} search={IProps.search} directoryFatherId={item.id}></Directory>
                                <Notas list={listNotas} icon={<DescriptionIcon fontSize="small"/>} filter={IProps.filter} search={IProps.search} />
                            </>
                        }
                    </div>
                </div>
            </>
            )}
        </>


    )

}

export default Directory;