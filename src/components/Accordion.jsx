import "./Accordion.css";
import accordionData from "./data";

export default function Accordion() {
  return (
    <>
      {accordionData.map((data) => {
        return (
          <div className="accordion" key={data.id}>
            <div className="text">{data.title}</div>
            <div className="answer">{data.content}</div>
          </div>
        );
      })}
    </>
  );
}
