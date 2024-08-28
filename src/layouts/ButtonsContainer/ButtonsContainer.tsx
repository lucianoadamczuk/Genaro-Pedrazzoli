import { ReactNode } from 'react';
import styles from './ButtonsContainer.module.css';
interface Props {
	children: ReactNode;
}
export default function ButtonsContainer({ children }: Props) {
	return <div className={styles.buttonsContainer}>{children}</div>;
}
