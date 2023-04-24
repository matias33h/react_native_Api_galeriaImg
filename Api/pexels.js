import axios from 'axios'


export const getImages=async(buscar="programming") => await axios.get(`https://api.pexels.com/v1/search?query=${buscar}`,{

headers:{
    Authorization:'jIBGJlt5j1EF3dUscXtdeHUasFBaSflERkjBTXKf7lvGkHbCGMptm4qH'
}

})