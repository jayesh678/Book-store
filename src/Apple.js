import { useNavigate } from "react-router-dom";
import styles from './style.module.css'; 
import Button from '@mui/material/Button';
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () => {
        //Navigate("/");
        alert("button has been clicked");
    };
    return(
    <div>
    <div>Apple Page</div>
    <Button variant="contained" onClick={onHomePageButtonClick} className=""> Hello World</Button>
     </div>
     );
    };
