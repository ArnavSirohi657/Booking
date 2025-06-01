import Detail from "./Detail";


export default function Explore() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Business</h1>
                <div className="col-4">
                    <Detail name={"AgentBox"} content={"One-stop travel solution offering the best deals to our travel agency partners"}/>
                    <br /> <br /> <br />
                    <Detail  name={"OutOfOffice"} content={"Manage corporate business travel, smartly"} />
                </div>
                <div className="col"></div>
                <div className="col-4">
                    <Detail name={"Mice"} content={"An end-to-end management solution for all your corporate events"} />
                    <br /> <br /> <br />
                    <Detail name={"API"} content={"Unlock seamless integration and scale with our powerful, reliable APIs"}/>
                </div>
            </div>
        </div>
    )
}