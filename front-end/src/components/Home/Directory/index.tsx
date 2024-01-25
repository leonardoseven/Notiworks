import FolderIcon from "@mui/icons-material/Folder";

import './index.css'

const Directory = () =>{

    return(
        <>
            <div className="container-directory">
                <div className="container-icon">
                    <div className="icon">
                        <FolderIcon fontSize="small"/>
                    </div>
                    <h4>Pasta 1</h4>
                </div>
                <h4>20/10/2023</h4>
            </div>
        </>


    )

}

export default Directory;