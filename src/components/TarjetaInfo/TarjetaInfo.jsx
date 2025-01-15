import "./Tarjetainfo.css"

const Tarjetainfo=(props) =>{
    
    const {title,ImgURL,description,URL}=props
    const handleClick = () => {
        window.location.href = URL;
      };
    return (
        <div className="Tarjetainfo">
            <h3>{title}</h3>
            <img src={ImgURL} alt="Imagen Componente" />
            <p>{description}</p>
            { URL == null ? "" : <button className="modern-button" onClick={handleClick}>Ver manual usuario</button>}
        </div>
    )
}
export { Tarjetainfo}
