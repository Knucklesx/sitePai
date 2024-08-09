import GetPics from "@/GetPics/GetPics";
import React from "react";
import style from "./Grid.module.css";

interface GridProps {
	title: string;
	children: React.ReactNode;
}

export default function Grid() {
	return (
		<>
			<div className={style.grid_div}>
				<h1 className={style.grid_text}>Últimos Trabalhos</h1>
			</div>
			<div>
				<GetPics />
			</div>
		</>
	);
}
