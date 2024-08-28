'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SlideMedia from '../SlideMedia/SlideMedia';
import { Icons } from '@/types';
import Link from 'next/link';

import './CarouselResponsive.css';

interface Props {
	displayMedia: {
		href: string;
		title: string;
		text: string;
		background: string;
		icon: string;
	}[];
}
export default function CarouselResponsive({ displayMedia }: Props) {
	return (
		<>
			<Swiper
				slidesPerView={1.3}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2.8,
					},
					768: {
						slidesPerView: 3.3,
					},
					1024: {
						slidesPerView: 4.3,
					},
				}}
				modules={[Pagination]}
				className='carouselResponsive'
			>
				{displayMedia &&
					displayMedia.map(({ href, title, text, background, icon }) => (
						<SwiperSlide key={`slide_${text.replace(/\s+/g, '-')}`}>
							<Link href={href} target='_blank'>
								<SlideMedia
									title={title}
									text={text}
									background={background}
									icon={icon as Icons}
								/>
							</Link>
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
}
