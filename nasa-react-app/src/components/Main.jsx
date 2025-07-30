export default function Main(props) {
    const { apiData } = props
    return (
        <div className="imgContainer">
            <img src={apiData?.hdurl} alt={apiData.title || 'bg-img'} className="bgImage"></img>
        </div>
    )
}