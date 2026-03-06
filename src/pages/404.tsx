import styles from '@/styles/404.module.scss'


const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/error-404.png" alt="404" className={styles.error__image} />
            <h1>404</h1>
            <h1>Halaman Tidak Ditemukan</h1>
            <p>Maaf, Halaman yang anda cari tidak ada</p>
        </div>
    );
}

export default Custom404;