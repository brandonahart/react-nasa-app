export default function SideBar(props) {
    const { showModal, handleShowModal, apiData } = props

    return (
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{apiData?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{apiData?.date}</p>
                    <p>{apiData.explanation}</p>
                </div>
                <button onClick={() => {
                    handleShowModal()
                }}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}