"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import foto1 from "../../Foto/2B70A24A-A281-4019-A393-0AEEA711358E_1_105_c.jpeg";
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
							src={foto1}
							alt="Slide 1"
							className={style.embla__image}
							width={1280}
							height={1024}
						/>
						<p className={style.embla__text}>Slide 1</p>
					</div>
					<div className={style.embla__slide}>
						<Image
							src={foto1}
							alt="Slide 2"
							className={style.embla__image}
							width={1280}
							height={1024}
						/>
						<p className={style.embla__text}>Slide 2</p>
					</div>
					<div className={style.embla__slide}>
						<Image
							src={foto1}
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
