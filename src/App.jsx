import { Tarjetainfo } from "./components/TarjetaInfo/TarjetaInfo.jsx"
const App=() => {
  return (
    <>
      <header>
        <h1>FAMILIA DE PLCs SIEMENS</h1>
      </header>

      <section className="section-card">
        <Tarjetainfo title = {"LOGO!"} 
          ImgURL ={ "https://http2.mlstatic.com/D_NQ_NP_2X_791877-MLA79728499157_102024-F.webp"} 
          description={"El LOGO! de Siemens es un microcontrolador programable diseñado para aplicaciones de microautomatización"} 
          URL={"https://cache.industry.siemens.com/dl/files/461/16527461/att_82567/v1/Logo_s.pdf"} 
        />
        <Tarjetainfo title = {"S7-200"} 
          ImgURL ={ "https://http2.mlstatic.com/D_NQ_NP_2X_745693-MLA75548862600_042024-F.webp"} 
          description={"El SIMATIC S7-200 de Siemens es un controlador lógico programable compacto diseñado para tareas de automatización pequeñas y medianas. Este modelo ha sido reemplazado por la serie S7-1200."} 
        />
        <Tarjetainfo title = {"LOGO!"} ImgURL ={ "https://http2.mlstatic.com/D_NQ_NP_783714-MLU74415316579_022024-O.webp"} 
          description={"El SIMATIC S7-1200 de Siemens es un controlador lógico programable moderno, diseñado para tareas de automatización compactas y medianas, con capacidad de comunicación avanzada."} 
          URL={"https://cache.industry.siemens.com/dl/files/622/91696622/att_42774/v1/s71200_system_manual_es-ES_es-ES.pdf"} 
        />
      </section>  

      <footer>
        <div className="foot">Desarrollado por Mauricio Sinelli</div>
      </footer>
    </>
  )
}
export {App}
