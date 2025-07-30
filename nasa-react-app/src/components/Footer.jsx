export default function Footer(props) {
    const { handleShowModal, apiData } = props
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{apiData?.title}</h2>
                <h1>APOD Projct</h1>
            </div>
            <button onClick={() => {
                handleShowModal()
            }}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}