

const getStoredReadList=()=>{
    const storedListStr=localStorage.getItem('read-list')
    if (storedListStr){
        const storedlist=JSON.parse(storedListStr)
        return storedlist;
    }
    else {
        return [];
    }
}
const addToStoredReadList=(id)=>{
    const storedList=getStoredReadList()
    if(storedList.includes(id)){
     console.log('already exist',id)
    return  toast("Already Exist!")
    }
    else{
        storedList.push(id);
        const storedlistStr=JSON.stringify(storedList)
        localStorage.setItem('read-list',storedlistStr)
    }
}
export {addToStoredReadList,getStoredReadList}