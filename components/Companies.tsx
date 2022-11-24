export default function Companies() {
  return (
    <>
      <div className="carrousel">
        <div className="caixa">
          <div className="div1">
            <img src="/images/companies.png"></img>
          </div>
        </div>
      </div>
      <style jsx>{`
        .carrousel {
          background-color: gray;
          display: flex;
          justify-content: center;
        }
        .caixa {
          width: 1000px;
          position: relative;
          overflow: hidden;
        }
        .div1 {
          display: flex;
          flex-wrap: nowrap;
          padding: 20px;
          width: 1000px;
          justify-content: space-around;
          animation: go-back 6s infinite;
          animation-timing-function: ease;
          animation-direction: alternate-reverse;
        }

        @keyframes go-back {
          0%,
          10% {
            transform: translate3d(-1500px, 0px, 0px);
          }
          20% {
            transform: translate3d(-1500px, 0px, 0px);
          }
          30%,
          40% {
            transform: translate3d(-500px, 0px, 0px);
          }
          50% {
            transform: translate3d(-500px, 0px, 0px);
          }
          60%,
          70% {
            transform: translate3d(500px, 0px, 0px);
          }
          80% {
            transform: translate3d(500px, 0px, 0px);
          }
          90%,
          100% {
            transform: translate3d(1500px, 0px, 0px);
          }
        }
      `}</style>
    </>
  );
}
