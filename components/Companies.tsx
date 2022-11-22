import { useEffect, useState } from "react";

export default function Companies() {
  const [div1, setDiv1] = useState(0);

  function carrouselFunction() {
    if (div1 === 0) {
      setDiv1(div1 + 1);
    } else {
      setDiv1(0);
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      carrouselFunction();
    }, 2000);
    return () => clearInterval(id);
  }, [div1]);

  return (
    <>
      <div className="carrousel">
        {div1 === 0 ? (
          <div className="div1">
            <img className="imgcarrousel" src="/images/logo_vmware.png"></img>
            <img className="imgcarrousel" src="/images/logo_mikrotik.png"></img>
            <img className="imgcarrousel" src="/images/logo_cisco.png"></img>
          </div>
        ) : (
          <div className="div2">
            <img className="imgcarrousel" src="/images/logo_cisco.png"></img>
            <img className="imgcarrousel" src="/images/logo_juniper.png"></img>
            <img className="imgcarrousel" src="/images/logo_huawei.png"></img>
          </div>
        )}
      </div>
      <style jsx>{`
        .carrousel {
          background-color: red;
          display: flex;
          justify-content: center;
        }
        .div1 {
          display: flex;
          flex-wrap: nowrap;
          padding: 20px;
          background-color: blue;
          width: 1000px;
          justify-content: space-around;
        }
        .div2 {
          display: flex;
          flex-wrap: nowrap;
          padding: 20px;
          background-color: blue;
          width: 1000px;
          justify-content: space-around;
        }
        .imgcarrousel {
          width: 200px;
          height: 90px;
        }
        .selected {
          transform: translate3d(-1000px, 0px, 0px);
          transition-duration: 300ms;
        }
        .notSelected {
          display: none;
        }
      `}</style>
    </>
  );
}
