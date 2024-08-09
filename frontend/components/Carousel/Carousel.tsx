"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { City, Dog, Zebra } from "../../GetPics/pics";
import style from "./Carousel.module.css";

export default function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className={style.embla}>
			<button className={style.embla__prev} onClick={scrollPrev}>
				{`${"<"}`}
			</button>
			<div className={style.embla__viewport} ref={emblaRef}>
				<div className={style.embla__container}>
					<div className={style.embla__slide}>
						<Image
							src={Dog}
							alt="Slide 1"
							className={style.embla__image}
							width={1280}
							height={1024}
						/>
						<p className={style.embla__text}>Slide 1</p>
					</div>
					<div className={style.embla__slide}>
						<Image
							src={Zebra}
							alt="Slide 2"
							className={style.embla__image}
							width={1280}
							height={1024}
						/>
						<p className={style.embla__text}>Slide 2</p>
					</div>
					<div className={style.embla__slide}>
						<Image
							src={City}
							alt="Slide 3"
							className={style.embla__image}
							width={1280}
							height={1024}
						/>
						<p className={style.embla__text}>Slide 3</p>
					</div>
				</div>
			</div>
			<button className={style.embla__next} onClick={scrollNext}>
				{`${">"}`}
			</button>
		</div>
	);
}
