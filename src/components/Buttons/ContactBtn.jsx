
import { PText } from "../Typography/PText";
import "./button_styling.css";

export const ContactBtn = ({ onClick }) => {

  return (
    <>
    <button  onClick={onClick} className="send-btn">
                <PText
                    className="text_btn brown-text"
                    text="Ask a question"
                />
            </button>
    </>
  )
}