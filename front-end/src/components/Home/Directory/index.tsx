import FolderIcon from "@mui/icons-material/Folder";
import './index.css'

export type ListObject = {
    id : number
    nome: string
    dtAtualizacao : string
}

interface IProps {
    list: ListObject[]
    icon: any
 }


const Directory : React.FC<IProps>= (IProps) =>{

    return(
        <>
        {IProps.list.map(item =>
            <>
                <div className="container-directorys" key={item.id}>
                    <div className="container-icon">
                        <div className="icon">
                            {IProps.icon}
                        </div>
                        <h4>{item.nome}</h4>
                    </div>
                    <h4>{item.dtAtualizacao}</h4>

                </div>
            </>
            )}
        </>


    )

}

export default Directory;