"use client";
import { LogoSemBg } from "@/Foto/pics";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	// const router = useRouter();
	const currentRouter = usePathname();

	const fullMenuItems = [
		{ name: "Principal", path: "/" },
		{ name: "Portfólio", path: "/portfolio" },
		{ name: "Contatos", path: "/contacts" },
	];

	const menuItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="bg-gray-400"
		>
			<NavbarContent className="sm:hidden pr-3" justify="start">
				<NavbarBrand>
					<Image src={LogoSemBg} alt="logo" className={styles.nav_brand} />
					<p className="font-bold text-inherit">JF</p>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="sm:hidden" justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<NavbarBrand>
					<Image src={LogoSemBg} alt="logo" className={styles.nav_brand} />
					<p className="font-bold text-inherit">João Facchinetti</p>
				</NavbarBrand>
				{/* <NavbarItem isActive>
					<Link color="foreground" href="#">
						Principal
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" aria-current="page">
						Portfólio
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Contatos
					</Link>
				</NavbarItem> */}
				{fullMenuItems.map((item) => (
					<NavbarItem key={item.path} isActive={currentRouter === item.path}>
						<Link
							color={currentRouter === item.path ? "primary" : "foreground"}
							href={item.path}
						>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarMenu>
				{fullMenuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? "warning"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							href="#"
							size="lg"
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
