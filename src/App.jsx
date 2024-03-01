import { img } from './data/imagenes';
//iconos
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {useState } from "react";


function App() {
  const [source, setSrc] = useState(img[0]); //estado para  guradar fuente actual
  const [prevSource, setPrevSrc] = useState("");  // estado para la previa fuente
  const [animacion, setAnimacion] = useState(""); //estado para signarle la animacion

  const changue = (condicion) => {
    //condicion si es 1 se mueve para la derecha si es 0 para la izquierda
    if (condicion) {
      setAnimacion({desaparecer:"desaparecer_izquierda",movimiento:"izquierda"});
      //si la fuente es la ultima posision del array seteamos al prinsipio
      if (source.id === img.length) {
        setSrc(img[0]);
        setPrevSrc(source.src); 
      } //si no seteamos la siguiente 
      else {
        setSrc(img[source.id]); //setemos la siguiente con el id
        setPrevSrc(source.src) //setemos la fuente actual que va a pasar a ser la previa
      }
    } 
    else {
      setAnimacion({desaparecer:"desaparecer_derecha",movimiento:"derecha"});
      //si es la primera fuente del array seteamos la ultima
      if (source.id === 1) {
        setSrc(img[img.length - 1]);
        setPrevSrc(source.src);
      }//si no setemos la anterior 
      else {
        setSrc(img[source.id - 2]);
        setPrevSrc(source.src);
      }
    }
  }

  function Img({ className, src }) {
    return (
      <img className={`rounded-lg w-img ${className}`} src={src} alt="" />
    );
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-black to-gray-800 flex items-center justify-center">
      <div className='flex flex-row gap-12 items-center'>
        <div onClick={() => { changue(0) }}>
          <ArrowBackIosNewIcon style={{ color: "fff", fontSize: 48 }}></ArrowBackIosNewIcon>
        </div>

        <Img className={`${animacion.movimiento} z-10 `} src={source.src} />
        <Img className={`${animacion.movimiento} ${animacion.desaparecer}  absolute z-0 `} src={prevSource} />

        <div onClick={() => { changue(1) }}>
          <ArrowForwardIosIcon style={{ color: "fff", fontSize: 48 }}></ArrowForwardIosIcon>
        </div>
      </div>
    </div>
  );
}

export default App;