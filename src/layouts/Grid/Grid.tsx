import { ReactNode } from 'react';
import styles from './Grid.module.css';
interface Props {
	children: ReactNode;
}
export default function Grid({ children }: Props) {
	return <div className={styles.grid}>{children}</div>;
}
