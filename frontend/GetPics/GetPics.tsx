import axios from "axios";
import Image from "next/image";
import style from "./GetPics.module.css";

interface Photo {
	id: number;
	src: string;
	text: string;
	album_name: string;
}

export default async function GetPics() {
	const { data } = await axios.get("http://localhost:3000/albums");

	const HEIGHT_WIDTH = 300;

	const additionalPhotosCount = (4 - (data.length % 4)) % 4;

	const additionalPhotos = data.slice(0, additionalPhotosCount);
	const photos = data.concat(additionalPhotos);

	return (
		<div className={`${style.grid} mt-10`}>
			<div className="grid grid-cols-4 ">
				{photos.map((foto: Photo, index: number) => (
					<div key={index} className={style.grid_item}>
						<Image
							src={foto.src}
							alt={foto.text}
							width={HEIGHT_WIDTH}
							height={HEIGHT_WIDTH}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
