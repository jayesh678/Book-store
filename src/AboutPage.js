import styles from './style.module.css';
import Button from '@mui/material/Button'; 
export const HomePage = () => {
  const onHomePageButtonClick = () =>{
    alert("button has been clicked");
  };
return <div>
<div>
<h1 style={{backgroundColor: "lightblue"}}>Home Page</h1>
      <p>Welcome!!!!</p>
      <Button variant="contained" onClick={onHomePageButtonClick} > Hello World</Button>
    </div>
    {
    <h1 className={styles.bigblue}>Welcome User!!!</h1>
  }

</div>;

    };