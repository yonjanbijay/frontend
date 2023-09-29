import { useEffect } from "react";

import { useParams } from "react-router-dom";

import {useProductContext} from "./context/NoteContext";
const API = "http://127.0.0.1:8000/api/motorcycle/?format=json";

const Single = () => {
  const { getSingleProduct, isSingleLoading, Single } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
motorcycle_model,
    description,
    image,
    price,

  } = Single;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    
    
      <div className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div >
            <img src="{image}" alt="" />
            
          </div>

          {/* product dAta  */}
          
            <h2>{motorcycle_model}</h2>
            

            <p >
              MRP:
              <del>
                <h6>{price} </h6>
              </del>
            </p>
            
            <p>{description}</p>
          </div>  
</div>
  );
};
export default Single;