'use client'

import { toggleFavoriteAction } from "@/actions/actions"
import FormContainer from "../form/FormContainer"
import { usePathname } from "next/navigation";
import { CardSubmitbutton } from "../form/Buttons";


const FavoriteToggleForm = (
    { favoriteId, landmarkId }
        : {
            favoriteId: string | null;
            landmarkId: string;
        }) => {
            console.log('id', favoriteId                          )
    const pathname = usePathname()
    const toggleAction = toggleFavoriteAction.bind(null, {
        favoriteId,
        landmarkId,
        pathname
    })
    return (

        <FormContainer action={toggleAction}>
            <CardSubmitbutton isFavorite={favoriteId ? true : false}/>
        </FormContainer>
    )
}
export default FavoriteToggleForm