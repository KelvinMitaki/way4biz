import React from "react";
// import { AiOutlineMinusCircle } from "react-icons/ai";
// import { BsPlusCircle } from "react-icons/bs";
import "./FAQAccordion.css";
import Panel from "./Panel";
import { Link } from "react-router-dom";

class FAQAccordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const panels = [
      {
        label: "How do I buy products on Way4Biz?",
        content: (
          <div className="faq-content-section">
            <p>Way4Biz sells products on its website and buying is easy:</p>
            <p>
              Way4Biz will indicate on the relevant product catalogues when
              products are for sale.{" "}
            </p>
            <p>
              You can simply add the products to your shopping cart and proceed
              through checkout using any of Way4Biz’s available payment methods.
            </p>
            <p>
              To buy on Way4Biz will however require you to have an account so
              that it can be easy to identify you and process your order easily.
            </p>
          </div>
        ),
      },
      {
        label: "How do I register with Way4Biz?",
        content: (
          <div className="faq-content-section">
            <p>
              At Way4Biz, you can register as a buyer or as a seller. A seller
              however can use the same account to buy.
            </p>
            <p>
              On registering we will need your full name, e-mail address, a
              strong password and a valid phone number.
            </p>

            <p>
              To register as a buyer do so <Link to="/sign-in">here</Link> and
              to register as a seller do so{" "}
              <Link to="/seller/register">here</Link>.
            </p>
          </div>
        ),
      },
      {
        label: "How do I pay for products on Way4Biz?",
        content: (
          <div className="faq-content-section">
            <p>Currently Way4Biz supports mpesa and card payment.</p>
          </div>
        ),
      },
      {
        label: "What are my delivery options?",
        content: (
          <div className="faq-content-section">
            <h5>Way4Biz offers 3 convenient methods of delivery:</h5>
            <ul>
              <li>
                <p>
                  <strong>Collect - </strong>You can choose to collect from
                  Way4Biz's pickup collection near you.
                </p>
              </li>
              <li>
                <p>
                  <strong>Courier - </strong>We deliver directly to your home or
                  office.This delivery however has two modes:{" "}
                  <strong>Normal Delivery</strong>
                  which takes 3-7 days and <strong>
                    Express Delivery
                  </strong>{" "}
                  which takes 24-48hrs.
                </p>
              </li>
            </ul>
          </div>
        ),
      },
      {
        label: "There's Already a Better Way",
        content:
          "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
      },
    ];
    const { activeTab } = this.state;
    return (
      <div className="my-accordion" role="tablist">
        {panels.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
      </div>
    );
  }
}

export default FAQAccordion;
