import toast, { ToastBar } from "react-hot-toast";
import { json } from "react-router-dom";

// get all coffee from local storage;
const getAllFavorite = ()=>{
    const all = localStorage.getItem('favorite')
    if (all) {
        const favorite = JSON.parse(all)
        console.log(favorite);
        return favorite;
    } else{
        console.log([]);
        return [];
    }
}

// add a coffee to local storage
const addFavorite = coffee => {
    // get all previously saved coffee data
    const favorite = getAllFavorite();
    // data find: 
    const isExist = favorite.find(item => item.id == coffee.id)
    if (isExist) return toast.error('Coffee already exist');
    
    favorite.push(coffee)
    localStorage.setItem('favorite', JSON.stringify(favorite))
    toast.success('Successfully Added')
}

// remove a coffee from local storage;
const removeFavorite = id => {
    const favorite = getAllFavorite();
    const remaining = favorite.filter(coffee => coffee.id != id)
    localStorage.setItem('favorite', JSON.stringify(remaining))
    toast.success('Successfully Remove')
}


export { addFavorite, getAllFavorite, removeFavorite }