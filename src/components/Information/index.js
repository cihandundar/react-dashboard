import Transaction from "components/Transaction";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const Information = () => {
  return (
    <div className="information">
      <div className="information__container">
        <div className="information__container__title">
          <h2>Billing Information</h2>
        </div>
        <div className="information__container__box">
          <div className="information__container__box__left">
            <h4>Oliver Liam</h4>
            <div className="information__container__box__left__text">
              <p>Company Name: Viking Burrito</p>
              <p>Email Address: oliver@burrito.com</p>
              <p>VAT Number: FRB1235476</p>
            </div>
          </div>
          <div className="information__container__box__right">
            <div className="information__container__box__right__btn">
              <button className="delete">
                <span className="btnIcon">
                  <MdDelete />
                </span>
                Delete
              </button>
              <button className="edit">
                <span className="btnIcon">
                  <MdEdit />
                </span>
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="information__container__box">
          <div className="information__container__box__left">
            <h4>Lucas Harper</h4>
            <div className="information__container__box__left__text">
              <p>Company Name: Stone Tech Zone</p>
              <p>Email Address: lucas@stone-tech.com</p>
              <p>VAT Number: FRB1235476</p>
            </div>
          </div>
          <div className="information__container__box__right">
            <div className="information__container__box__right__btn">
              <button className="delete">
                <span className="btnIcon">
                  <MdDelete />
                </span>
                Delete
              </button>
              <button className="edit">
                <span className="btnIcon">
                  <MdEdit />
                </span>
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="information__container__box">
          <div className="information__container__box__left">
            <h4>Ethan James</h4>
            <div className="information__container__box__left__text">
              <p>Company Name: Fiber Notion</p>
              <p>Email Address: ethan@fiber.com</p>
              <p>VAT Number: FRB1235476</p>
            </div>
          </div>
          <div className="information__container__box__right">
            <div className="information__container__box__right__btn">
              <button className="delete">
                <span className="btnIcon">
                  <MdDelete />
                </span>
                Delete
              </button>
              <button className="edit">
                <span className="btnIcon">
                  <MdEdit />
                </span>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transaction />
    </div>
  );
};

export default Information;
