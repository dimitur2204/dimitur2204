import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { getChipColor } from '../../utils';
import Chip from '../Chip/Chip';
import { EffectCards } from 'swiper';

function LongCard({
	image_1,
	image_2,
	image_3,
	chips,
	title,
	title_bg,
	description,
	description_bg,
	url,
}) {
	const { i18n } = useTranslation();
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<article className="transition-shadow hover:shadow-md border border-transparent hover:border-slate-200 rounded p-5 flex flex-wrap sm:flex-nowrap mb-3">
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className="h-48 w-48"
				>
					<SwiperSlide>
						<img
							className="object-cover h-48 w-48 rounded border border-slate-300"
							src={image_1}
							alt="Post thumbnail"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="object-cover h-48 w-48 rounded border border-slate-300"
							src={image_2}
							alt="Post thumbnail"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="object-cover h-48 w-48 rounded border border-slate-300"
							src={image_3}
							alt="Post thumbnail"
						/>
					</SwiperSlide>
				</Swiper>

				<div className="ml-0 sm:ml-12">
					<h3 className="text-2xl font-bold mb-2">
						{i18n.language === 'en' ? title : title_bg}
					</h3>
					<div className="mb-4">
						{chips?.split(',').map((chipText, index) => (
							<Chip
								key={chipText}
								text={chipText}
								color={getChipColor(chipText)}
								customClasses={index !== 0 ? 'ml-4' : null}
							/>
						))}
					</div>

					<p className="description">
						{i18n.language === 'en' ? description : description_bg}
					</p>
				</div>
			</article>
		</a>
	);
}

export default LongCard;
