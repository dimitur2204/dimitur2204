import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import BG from './BG.svg';
import GB from './GB.svg';

function Link({ href, button, children, ...props }) {
	return (
		<li className="font-medium flex items-center justify-center" {...props}>
			{button ? <button>{children}</button> : <a href={href}>{children}</a>}
		</li>
	);
}

function Nav() {
	const { t, i18n } = useTranslation('nav');
	const style = useSpring({
		from: { opacity: 0, y: -30 },
		to: { opacity: 1, y: 0, visibility: 'visible!important' },
		config: { duration: 400 },
		delay: 400,
	});
	return (
		<animated.nav className="flex justify-between py-2" style={style}>
			<a href="/">
				<span className="font-serif text-3xl">D.Niz</span>
			</a>
			<ul className="grid gap-2 grid-cols-3">
				<Link
					onClick={() =>
						i18n.changeLanguage(i18n.language === 'en' ? 'bg' : 'en')
					}
					button
				>
					<div className="flex">
						<span>{i18n.language === 'en' ? 'БГ' : 'EN'}</span>
						<img
							className="inline-block ml-2"
							src={i18n.language === 'en' ? BG : GB}
							alt="Country flag"
						/>
					</div>
				</Link>
				<Link href={'#blog'}>{t('blog')}</Link>
				<Link href={'#skills-and-projects'}>{t('projects')}</Link>
			</ul>
		</animated.nav>
	);
}

export default Nav;
