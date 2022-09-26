import React, { Component } from 'react';
import AvatarImage from '../../components/AvatarImage/AvatarImage';
import Typed from 'react-typed';
import { useSpring, animated } from 'react-spring';
import { useTranslation, withTranslation } from 'react-i18next';

class TypedHeader extends Component {
	componentDidUpdate() {
		this.typed.reset();
	}
	render() {
		return (
			<Typed
				typedRef={(typed) => {
					this.typed = typed;
				}}
				contentType={'html'}
				strings={[
					`${this.props.t('header.stranger')} <br /> ${this.props.t(
						'header.this'
					)} <span class="text-violet-500">${this.props.t(
						'header.name'
					)}</span>`,
				]}
				typeSpeed={25}
				showCursor={true}
				startDelay={800}
			/>
		);
	}
}

const TypedHeaderWithTranslation = withTranslation('sections')(TypedHeader);

export default function Header() {
	const style = useSpring({
		from: { opacity: 0, y: 30 },
		to: { opacity: 1, y: 0 },
		config: { duration: 400 },
		delay: 400,
	});
	const { t } = useTranslation('sections');
	return (
		<animated.header
			className="block my-8 sm:my-0 sm:flex items-center"
			style={style}
		>
			<div className="flex-1">
				<h1 className="font-bold text-5xl text-black mb-5">
					<TypedHeaderWithTranslation />
				</h1>
				<div className="flex justify-between">
					<div className="mr-5">
						<p>{t('header.job')}</p>
						<a className="text-blue-500" href="https://www.uniwise.co.uk/">
							@UNIWise
						</a>
					</div>
					<span className="block font-bold text-xl mr-5">&</span>
					<div className="mr-2">{t('header.passion')}</div>
				</div>
			</div>
			<AvatarImage />
		</animated.header>
	);
}
