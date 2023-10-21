const getLocalStorage = () => {
  const getLocal = localStorage.getItem('cart');
  if(getLocal){
    return parseInt(JSON.parse(getLocal));
  }else{
    return 0;
  }
}

const saveLocalStorage = (number) => {
  const getStorage = getLocalStorage();
  const num = getStorage + number;
  localStorage.setItem('cart', JSON.stringify(num));

}

const deleteLocalStorage = (number) => {
  const getStorage = getLocalStorage();
  const num = getStorage - number;
  localStorage.setItem('cart', JSON.stringify(num));
}

export {getLocalStorage, saveLocalStorage, deleteLocalStorage};