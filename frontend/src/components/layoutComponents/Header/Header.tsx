import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';
import { LogOut, Settings, User } from 'lucide-react';

function Header() {
	const { logout, authUser } = useAuthStore();

	return (
		<header className={styles.header} data-testid='header'>
			<div className={styles.headerContainer}>
				<div className={styles.headerLogoWrap} data-testid='headerLogo'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='35'
						height='35'
						fill='var(--main-color)'
						viewBox='0 0 512.000000 512.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						<g
							transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
							stroke='none'
						>
							<path
								d='M2195 4594 c-216 -25 -287 -38 -437 -81 -497 -140 -909 -462 -1111
							-868 -229 -458 -181 -1000 126 -1418 l50 -68 -7 -77 c-19 -217 -123 -538 -267
							-824 -30 -59 -36 -78 -24 -78 34 0 312 63 480 110 215 59 400 121 550 185 149
							64 198 93 189 114 -4 9 -9 92 -12 184 -2 92 -7 167 -11 165 -4 -2 -60 -31
							-126 -65 -176 -90 -487 -214 -501 -200 -3 3 8 47 24 99 37 116 76 275 97 396
							l16 93 -71 76 c-128 137 -221 297 -262 452 -31 117 -35 320 -10 441 104 502
							587 897 1202 985 137 19 406 19 535 0 625 -94 1093 -480 1204 -993 l16 -73 90
							-30 c50 -17 132 -50 183 -74 l92 -44 0 72 c0 227 -87 504 -222 714 -283 437
							-830 744 -1432 802 -102 10 -292 12 -361 5z'
							/>
							<path
								d='M3215 2864 c-544 -59 -987 -385 -1105 -814 -94 -344 5 -687 276 -955
								167 -165 385 -278 652 -337 145 -32 460 -32 619 0 l113 23 57 -29 c75 -38 218
								-91 368 -137 117 -36 416 -108 422 -101 2 1 -19 50 -46 107 -88 187 -161 429
								-161 535 0 24 15 55 53 111 124 182 182 413 158 625 -53 467 -440 839 -987
								948 -97 20 -334 33 -419 24z m-264 -939 c40 -26 79 -94 79 -138 0 -33 -24 -94
								-48 -120 -27 -30 -88 -57 -127 -57 -39 0 -100 27 -127 57 -24 26 -48 87 -48
								120 0 14 9 46 21 70 47 96 158 127 250 68z m509 10 c50 -25 90 -92 90 -150 0
								-51 -21 -95 -63 -132 -108 -95 -278 -18 -280 125 -2 131 135 216 253 157z
								m518 -3 c108 -49 116 -220 13 -289 -74 -50 -155 -42 -217 21 -62 61 -70 138
								-24 213 46 75 136 97 228 55z'
							/>
						</g>
					</svg>
				</div>

				<div className='flex items-center gap-2'>
					<Link
						to={'/settings'}
						className={`btn btn-sm gap-2 transition-colors`}
					>
						<Settings className='size-4' />
						<span className='hidden sm:inline'>Settings</span>
					</Link>

					{authUser && (
						<>
							<Link to={'/profile'} className={`btn btn-sm gap-2`}>
								<User className='size-5' />
								<span className='hidden sm:inline'>Profile</span>
							</Link>

							<button
								className='btn btn-sm gap-2 hover:text-accent'
								onClick={logout}
							>
								<LogOut className='size-5' />
								<span className='hidden sm:inline'>Logout</span>
							</button>
						</>
					)}
				</div>
			</div>
		</header>
	);
}
export default Header;
