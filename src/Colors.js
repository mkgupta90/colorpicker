import React, { useState } from 'react';
//React Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Color = () => {

    const [colorNames] = useState([
        '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#2196F3', 
        '#03A9F4', '#00BCD4', '#009688', '#8BC34A', '#CDDC39', 
        '#FFEB3B', '#FFC107', '#FF5722', '#795548', '#9E9E9E', 
        '#607D8B', '#607D8B'   
      ])

      const colorCopy = (e) => {
          let color = e.target.innerText;
          //console.log(color)
          if(navigator.clipboard) {
             navigator.clipboard.writeText(color);
             navigator.clipboard.readText();
          }

          toast.success(`Color has coppied ${color} Successfully`, {
              position: toast.POSITION.TOP_RIGHT
          })


      }

    return(
        <div className="row">
            {colorNames.map( colors => (
                <div className="item" 
                     key={colors} 
                     style={{background : colors}}
                     onClick={colorCopy}>
                    <div>{colors}</div>
                </div>
            ))}
        </div>
    );
}

export default Color;
