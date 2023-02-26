import { useRoutes } from "react-router";
import Layout from "./Layout";
import NotFound from "./main/notFoundPage/NotFound";
import Home from "./main/home";
import AboutGames from "./main/about";
import Reviews from "./main/reviws/Reviews";
import Gallery from "./main/gallery/Gallery";
import Mail from "./main/mail";
import ReviwsChild from "./main/reviws/reviwsChild";
import News from "./main/news/News";
import Favourite from "./main/favourite/Favourite";

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "about", element: <AboutGames/>},
        { path: "reviews", element: <Reviews/> },
        { path: "reviews/:id", element: <ReviwsChild/> },
        { path: "mail", element:<Mail/>},
        { path: "news", element: <News/> },
        { path: "gallery", element: <Gallery /> },
        { path: "favourite", element: <Favourite /> },
        { path:'*',element:<NotFound/>}
      ]
    },
    
  ]);

  return element;
}