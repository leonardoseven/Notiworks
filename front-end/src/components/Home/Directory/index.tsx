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
    filter: string
    search: string
 }


const Directory : React.FC<IProps>= (IProps) =>{

    const searchList = IProps.list.filter((item) =>
        item.nome.toLowerCase().includes(IProps.search.toLowerCase()) || item.dtAtualizacao.toLowerCase().includes(IProps.search.toLowerCase()) 
    );

    return(
        <>
        {searchList.map(item =>
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