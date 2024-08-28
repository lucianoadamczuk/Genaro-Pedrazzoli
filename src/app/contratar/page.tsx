import { Icon, Text, Title } from '@/components';

import styles from './contratar.module.css';

export default function page() {
	return (
		<section className={styles.modal}>
			<Title color='primary' size='xl' tag='h4' text='Ey, trabajemos juntos' />

			<div>
				<div className={styles.box}>
					<Icon as='mail' color='light' size='md' />
					<Text
						color='light'
						size='md'
						tag='p'
						text='lucianoadamczuk@gmail.com'
					/>
				</div>
				<div className={styles.box}>
					<Icon as='phone' color='light' size='md' />
					<Text color='light' size='md' tag='p' text='+54 9 11 5337 6931' />
				</div>
			</div>
		</section>
	);
}
