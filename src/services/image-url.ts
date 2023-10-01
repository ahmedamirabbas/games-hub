
const getCroppedImageUrl = (url: string)=>{
    const target = 'madia/'
    const index= url.indexOf(target) + target.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
export default getCroppedImageUrl