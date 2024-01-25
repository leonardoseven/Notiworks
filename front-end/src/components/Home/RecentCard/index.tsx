import ShareIcon from "@mui/icons-material/Share";
import './index.css'

const text = "Duas linhas do texto que compõe a nota. Sem formatação.Sendo exibidas, no máximo duas linhas...";

const getDate = () =>{
    return <>{new Date().getDate()}</>
}

const RecentCard = () =>{

    return(
        <>
            <div className="container-recent-card">
                <p>{text}</p>
                <p>{getDate()} <ShareIcon /></p>
            </div>

        </>
    )
}

export default RecentCard;