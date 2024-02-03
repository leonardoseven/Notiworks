import ShareIcon from "@mui/icons-material/Share";
import './index.css'

interface IProps {
   data: string
   conteudo:string
 }

const RecentCard : React.FC<IProps>= (IProps) =>{

    return(
        <>
            <div className="container-recent-card">
                <p>{IProps.conteudo}</p>
                <p>{IProps.data} <ShareIcon /></p>
            </div>

        </>
    )
}

export default RecentCard;