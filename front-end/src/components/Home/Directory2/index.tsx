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
    search: string
}

const Directory2 : React.FC<IProps>= (IProps) =>{

    const [listDirectory, setListDirectory] = useState<ListObject[]>([])

    const [directoryName, setDirectoryName] = useState("")


    const searchList = listDirectory.filter((item) =>
        item.nome.toLowerCase().includes(IProps.search.toLowerCase()) || item.dtAtualizacao.toLowerCase().includes(IProps.search.toLowerCase()) 
    );

   
    useEffect(() =>{
        handleLoadDirectory()
    },[])

    const handleLoadDirectory = () =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/directory/list-all',config)
        .then((response)=>{
            setListDirectory(response.data.listDirectory)
            console.log(response)
        })
        .catch((error)=>{
            alert("error")
        })
    }


    const handleClick =(directoryId : number, nome : string) =>{
        
        var id = localStorage.getItem("directory-to-save") 
        if(id != null && id != undefined){
            if(id == directoryId.toString()){
                setDirectoryName("")
                localStorage.removeItem("directory-to-save")
            }else{
                setDirectoryName(nome)
                localStorage.setItem("directory-to-save", directoryId.toString());
            }
        }else{
            setDirectoryName(nome)
            localStorage.setItem("directory-to-save", directoryId.toString());
        }

    }



    return(
        <>
        <h5>{directoryName}</h5>
        {searchList.map(item =>
            <>
                <div onClick={() =>{handleClick(item.id, item.nome)}} key={item.id}>
                    <div className="container-directorys">
                        <div className="container-icon">
                            <div className="icon">
                               <FolderIcon fontSize="small"></FolderIcon>
                            </div>
                            <h4>{item.nome}</h4>
                        </div>
                        <h4>{item.dtAtualizacao}</h4>
                    </div>
                </div>
            </>
            )}
        </>


    )

}

export default Directory2;