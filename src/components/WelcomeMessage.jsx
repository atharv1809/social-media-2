import styles from "./WelcomeMessage.module.css";
function WelcomeMessage()
{
    return <>
    <div className={styles.container}>
        <center className={styles.welcomeMessage}><h1>There are no new Posts.</h1></center>
    </div>
    </>
}
export default WelcomeMessage;