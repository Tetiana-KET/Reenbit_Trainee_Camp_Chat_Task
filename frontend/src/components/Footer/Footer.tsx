import styles from './Footer.module.css';

function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<ul className={styles.socialItems}>
					<li className={`${styles.socialItem} ${styles.githubLink}`}>
						<a
							className={styles.socialItemLink}
							href='https://github.com/Tetiana-KET'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								viewBox='64 64 896 896'
								focusable='false'
								data-icon='github'
								width='35px'
								height='35px'
								fill='var(--main-color)'
								aria-hidden='true'
								className={styles.socialItemSvg}
							>
								<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
							</svg>
						</a>
						<a
							className={styles.socialItemLink}
							href='https://github.com/Tetiana-KET'
							target='_blank'
							rel='noreferrer'
						>
							Tetiana
						</a>
					</li>

					<li className={`${styles.socialItem} ${styles.linkedinLink}`}>
						<a
							className={styles.socialItemLink}
							href='www.linkedin.com/in/tatiana-ket'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								data-supported-dps='24x24'
								fill='var(--main-color)'
								width='35px'
								height='35px'
								className={styles.socialItemSvg}
							>
								<path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
export default Footer;
