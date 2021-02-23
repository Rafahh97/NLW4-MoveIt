import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Rafahh97.png" alt="Rafaela Gomes Ferreira" />
            <div>
                <strong>Rafaela Gomes Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}