'use client';
import { Button, List, Text, Title } from '@/components';
import { configRoutes } from '@/configurations';
import { contentBuy } from '@/contents';
import { dataProducts } from '@/data';
import { Grid, Header, Section } from '@/layouts';
import { Product } from '@/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import styles from './buy.module.css';

export default function Page() {
	/* ----------------- products destructuring and organization ---------------- */
	/* --------------------------------- starts --------------------------------- */
	const { consultings, library, routines } = dataProducts;
	const { basic, standard, premium } = consultings;
	const { guides, exersisesRoom, combo } = library;
	const { beginner, intermediate, advance } = routines;
	const products = [
		basic,
		standard,
		premium,
		guides,
		exersisesRoom,
		combo,
		beginner,
		intermediate,
		advance,
	];
	/* ---------------------------------- ends ---------------------------------- */

	/* --------------------------- handle query params -------------------------- */
	/* --------------------------------- starts --------------------------------- */
	const [productFound, setProductFound] = useState<undefined | Product>();
	const searchParams = useSearchParams();
	const paramProduct = searchParams.get('producto');
	useEffect(() => {
		if (paramProduct) {
			const findingProducts = products.find(
				(product) => product.slot === paramProduct
			);
			setProductFound(findingProducts);
		}
	}, [paramProduct]);
	/* ---------------------------------- ends ---------------------------------- */

	//content
	const { header } = contentBuy;

	return (
		<>
			<Header
				bgMobile={header.bgMobile}
				bgDesktop={header.bgDesktop}
				title={header.title}
				subtitle={header.subtitle}
			/>
			<Suspense>
				<Section>
					{!productFound ? (
						<Grid>
							<div>
								<Title tag='h3' color='primary' size='xl' text='Productos' />
								<Text
									color='dark'
									size='md'
									tag='p'
									highlighted
									text={[
										'Quiero brindarle a mis clientes lo mejor de lo mejor.',
										'Es por eso que poseo una amplia variedad de products y servicios.',
										'¿En qué estás interesado?',
									]}
								/>
							</div>

							<div className={styles.productsContainer}>
								{products.map((item) => (
									<Link
										key={`product_item-${item.slot}`}
										href={`${configRoutes.buy.pathname}?producto=${item.slot}`}
									>
										{item.name}
									</Link>
								))}
							</div>
						</Grid>
					) : (
						<Grid>
							<div>
								<Title
									color='primary'
									size='xl'
									tag='h3'
									text={productFound?.name}
								/>
								{productFound.slot.includes('asesoria') ? (
									<List
										color='dark'
										display={productFound.description as string[]}
									/>
								) : (
									<Text
										color='dark'
										size='md'
										tag='p'
										text={productFound.description}
									/>
								)}
							</div>

							<Button
								color='dark'
								href='/contratar'
								text={productFound.buyingOptions}
							/>
						</Grid>
					)}
				</Section>
			</Suspense>
		</>
	);
}
