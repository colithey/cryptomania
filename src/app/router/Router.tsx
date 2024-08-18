import { FC, ReactElement, Suspense } from "react";
import { Auth } from "../../pages/Auth";
import { Coin } from "../../pages/Coin";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/About";
import { Services } from "../../pages/Services";
import { Contact } from "../../pages/Contact";

export enum PagesEnum {
	HOME = "/",
	AUTH = "/auth",
	COIN = "/coin/:id",
	ABOUT = '/about',
	CONTACT = '/contact',
	SERVICES = '/services',
	NOT_FOUND = "*"
}

const AppRouterPages: Record<PagesEnum, ReactElement> = {
	[PagesEnum.HOME] : <Home />,
	[PagesEnum.AUTH] : <Auth />,
	[PagesEnum.COIN] : <Coin />,
	[PagesEnum.ABOUT] : <About />,
	[PagesEnum.SERVICES] : <Services />,
	[PagesEnum.CONTACT] : <Contact />,
	[PagesEnum.NOT_FOUND] : <NotFound />
}

interface AppRouterProps {}
export const AppRouter: FC<AppRouterProps> = () => {
	return (
		<Suspense fallback={<>Loading ...</>}>
			<Routes>
				{
					Object.entries(AppRouterPages).map(([path, element]) => (
						<Route path={path} element={element} key={path} />
					))
				}
			</Routes>
		</Suspense>
	)
}