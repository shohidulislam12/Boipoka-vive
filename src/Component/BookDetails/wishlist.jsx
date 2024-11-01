const getWishlist=()=>{
    const wishlistStr=localStorage.getItem('wish-list')
    if(wishlistStr){
        const wishlist=JSON.parse(wishlistStr)
        return wishlist;
    }
    else {return []}
}
const addToWishlist=(id)=>{
    const wishlist=getWishlist()
    if(wishlist.includes(id)){
        console.log("already exist",id)
    
    }
    else{
wishlist.push(id)
const wishlistStr=JSON.stringify(wishlist)
localStorage.setItem('wish-list',wishlistStr)
    }
}
export{ addToWishlist, getWishlist}