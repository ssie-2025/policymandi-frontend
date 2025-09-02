import React , { useState }from 'react'
import './Workflow.css'
import workflow1 from '../../assets/lifeinsurance/workflow1.jpg'
import workflow2 from '../../assets/lifeinsurance/workflow2.jpg'
import workflow3 from '../../assets/lifeinsurance/workflow3.jpg'
import short_video from '../../assets/lifeinsurance/short-video.mp4'

const cardsData = [
    {
        img: workflow1,
        title: "Notify the Insurer",
        desc: "The nominee must inform the insurance company about the policyholder’s death as soon as possible. This can be done online, through customer care, or by visiting a branch."
    },
    {
        img: workflow2,
        title: "Submit Required Documents",
        desc: "The nominee needs to submit the necessary documents, including the death certificate, policy documents, and identity proof, to initiate the claim process."
    },
    {
        img: workflow3,
        title: "Claim Assessment",
        desc: "The insurance company will assess the claim based on the submitted documents and may request additional information if needed."
    }
]


function WorkFlow() {
    const [startIdx, setStartIdx] = useState(0);
    const cardsToShow = 2;

    const handleNext = () => {
        if (startIdx + cardsToShow < cardsData.length) {
            setStartIdx(startIdx + cardsToShow);
        }
    };

    const handlePrev = () => {
        if (startIdx - cardsToShow >= 0) {
            setStartIdx(startIdx - cardsToShow);
        }
    };
  return (
    <div className="work-flow-container">
        <div className="work-flow-top">
    <div className="work-flow-text">
        <p>Claim Process</p>
        <div className="showcase">
            <video src={short_video} autoPlay loop muted></video>
            <h2>Fast, Transparent & Supportive <br /> Claim Assistance</h2>
        </div>
         
         <h4>We ensure a seamless claim experience with quick processing, 
            complete transparency, and end-to-end support. Our dedicated
             claim assistance team is always available to guide you through 
             every step, making the process stress-free and reliable.</h4>
       </div>

       
       
      <div className="work-flow-cards">
        <div className="work-flow-navigation">
        <button onClick={handlePrev} disabled={startIdx === 0}>←</button>
        <button onClick={handleNext} disabled={startIdx + cardsToShow >= cardsData.length}>→</button>
      </div>
        {cardsData.slice(startIdx, startIdx + cardsToShow).map((card, idx) => (
          <div className="work-flow-card" key={idx}>
            <img src={card.img} alt={card.title} />
            <div className="work-flow-card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>

          </div>
          
        ))}
      </div>
      
    </div>
    </div>

    // {/* // <div className="work-flow-container">
    // //   <div className="work-flow-top">

    // //     <div className="work-flow-text">
    // //       <p>Claim Process</p>
    // //       <h2>Fast, Transparent & Supportive <br /> Claim Assistance</h2>
    // //     </div>


    // //     <div className="work-flow-cards">
    // //       <div className="work-flow-card">
    // //         <img */}
    // {/* //           src={workflow1}
    // //           alt="Who we are"
    // //         />
    // //         <div className="work-flow-card-content">
    // //           <h3>WHO WE ARE</h3>
    // //           <p>
    // //             Ocean Group is one of the leader’s groups in the global and
    // //             logistics services as it continues to expand its horizons.
    // //           </p>
    // //         </div>
    // //       </div> */}

    // {/* //       <div className="work-flow-card">
    // //         <img */}
    // {/* //           src={workflow2}
    // //           alt="Logistics"
    // //         />
    // //         <div className="work-flow-card-content">
    // //           <h3>LOGISTICS REDEFINED</h3>
    // //           <p>
    // //             Ocean Group is one of the leader’s groups in the global and
    // //             logistics services as it continues to expand its horizons.
    // //           </p>
    // //         </div>
    // //       </div> */}
    // {/* //     </div> */}
    // {/* //   </div> */}
    // {/* //   </div> */}

  )
}

export default WorkFlow
