import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: 'anasayfa component'
    },
    {
        path:'projects',
        element: 'projelerim component'
    },
    {
        path: 'journey',
        element: 'yolculuğum component'
    },
    {
        path: 'bookmarks',
        element: 'yer işaretlerim component'
    },
    {
        path: 'me',
        element: 'ilgi alanlarım, hayatım fotoğraf component'
    }
])

export default routes;