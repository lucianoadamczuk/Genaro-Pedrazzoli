import { Icon, Text, Title } from '@/components';
import styles from './Footer.module.css';
import {
	configMyPersonalInformation,
	configPersonalInformation,
} from '@/configurations';
import Link from 'next/link';
import { Icons } from '@/types';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img src='/images/bar.png' alt='Una barra' className={styles.image} />

			{/* ------------------------------- top section ------------------------------ */}
			<section className={styles.topSection}>
				{/* social medias */}
				<article className={styles.box}>
					<Title color='light' size='md' tag='h6' text='Redes Sociales' />
					<Text
						color='muted'
						size='sm'
						tag='small'
						text='Sígueme para estar siempre actualizado'
					/>

					<div className={styles.iconsContainer}>
						{configPersonalInformation.map(({ name, href }) => (
							<Link key={`icon_${name}_${href}`} href={href}>
								<Icon size='sm' color='secondary' as={name as Icons} />
							</Link>
						))}
					</div>
				</article>

				{/* important */}
				<div className={styles.box}>
					<Title color='light' size='md' tag='h6' text='Importante' />
					<Text
						color='muted'
						size='sm'
						tag='small'
						text='Me interesa cuidar tu salud, por lo que te aconsejo que hagas un checkeo médico antes de comenzar.'
					/>
				</div>

				{/* contact */}
				<article className={styles.box}>
					<Title color='light' size='md' tag='h6' text='Contacto' />
					<Text color='muted' size='sm' tag='small' text='Email:' /> <br />
					<Text color='muted' size='sm' tag='small' text='Telefono:' />
				</article>
			</section>

			{/* ----------------------------- bottom section ----------------------------- */}
			<section className={styles.bottomSection}>
				<div>
					<Text
						color='light'
						size='sm'
						tag='small'
						text='Genaro Pedrazzoli Copyright | Todos los derechos reservados'
						centered
					/>
				</div>
				<Text
					color='muted'
					size='xs'
					tag='small'
					text='Este sitio ha sido creado por Luciano Adamczuk'
					centered
				/>

				{/* my social medias */}
				<div className={styles.iconsContainer}>
					{configMyPersonalInformation.map(({ name, href }) => (
						<Link key={`icon_${name}_${href}`} href={href}>
							<Icon size='xs' color='light' as={name as Icons} />
						</Link>
					))}
				</div>
			</section>
		</footer>
	);
}
