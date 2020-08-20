import React from "react";

import "./TermsConditions.css";
import Footer from "../../Footer/Footer";
import MiniMenuWrapper from "../../MiniMenuWrapper/MiniMenuWrapper";
import HelpCenterHeader from "./HelpCenterHeader";

class TermsConditions extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content white-body">
          <HelpCenterHeader />

          <div className="container">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Terms and Conditions
            </h3>
            <div className="terms-content">
              <h3>Introduction</h3>
              <p>Way4Biz is a 2 in 1 company that operates on an e-commerce platform consisting of a web application and mobile applications(Ecommerce platform application and a logistics application) ,supporting logistics and payment infrastructure, for the sale,purchase and delivery of consumer products.</p>
              <p>These Way4Biz general terms and conditions shall apply to buyers and sellers on the platforms and shall govern the use of the platform and related services.</p>
              <p>By using our platform, you accept these general terms and conditions in full. If you disagree with anything then you should not use our platform.</p>
              <p>You can only use our platform to expand your business marketing strategy or in delivering your goods if and only if you agree to this terms and conditions</p>

              <h3>Registration</h3>
              <p>You may register as a buyer or seller on our platform. A seller however can act as a buyer but a buyer cannot act as a seller.</p>
              <p>To register for an account on our platform you need to complete the registration forms as required and submit it.</p>
              <p>If you register for an account with our platform as a buyer, you will be asked to provide an email address which is unique ,a valid phone number and also a password which should be confidential.</p>
              <p>. If you register for an account with our platform as a seller, you will be asked to provide an email address which is unique ,a valid phone number , a password which should be confidential ,your storename and also its description.</p>
              <p>Any activity in your account that may not align with our terms of operation may result to immediate suspension or even deletion of your account.</p>

              <h3>Terms and conditions of sale</h3>
              <h6>You acknowledge that:</h6>
              <ul>
                <li><p>We provide an online platform for sellers to sell and buyers to purchase products;</p></li>
                <li><p>We accept  sales  and do the delivery on behalf of the sellers to the consumers.</p></li>
              </ul>
              <p>The price for a product will be as stated in the relevant product catalogue;</p>
              <p>The price for the product must include all taxes and comply with applicable laws in force from time to time;</p>
              <p>Products must be of satisfactory quality, fit and safe for any purpose specified in, and conform in all material respects to, the product catalogue and any other description of the products supplied or made available by the seller to the buyer.</p>

              <h3>Returns and refunds</h3>
              <p>Returns of products by buyers and acceptance of returned products by sellers shall be managed by us in accordance with the returns page on the platform, as may be amended from time to time. Acceptance of returns shall be in our discretion, subject to compliance with applicable laws of the territory.</p>
              <p>Returned products shall be accepted and refunds issued by Way4Biz, for and on behalf of the seller.</p>
              <p>Changes to our returns page or refunds page shall be effective in respect of all purchases made from the date of publication of the change on our website.</p>

              <h3>Payments</h3>
              <p>Any buyer must make payments due under these general terms and conditions in accordance with the Payments Information and Guidelines on the platform.</p>

              <h3>Rules about your content</h3>
              <h6>In these general terms and conditions, "your content" means:</h6>
              <ul>
                <li><p>All works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our platform for storage or publication, processing by, or onward transmission; and</p></li>
                <li><p>All communications on the platform, including product reviews, feedback and comments.</p></li>
              </ul>
              <h6>Your content must be appropriate, civil and tasteful, and accord with generally accepted standards of etiquette and behaviour on the internet, and must not:</h6>
              <ul>
                <li><p>Be offensive, obscene, indecent, pornographic, lewd, suggestive or sexually explicit;</p></li>
                <li><p>Depict violence in an explicit, graphic or gratuitous manner; </p></li>
                <li><p>Be blasphemous, in breach of racial or religious hatred or discrimination legislation;</p></li>
                <li><p>Be deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory or inflammatory;</p></li>
                <li><p>Cause annoyance, inconvenience or needless anxiety to any person; or</p></li>
                <li><p>Constitute spam.</p></li>
              </ul>
              <h6>Your content must not be illegal or unlawful, infringe any person's legal rights, or be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law). Your content must not infringe or breach:</h6>
              <ul>
                <li><p>Any copyright, moral right, database right, trademark right, design right, right in passing off or other intellectual property right;</p></li>
                <li><p>Any right of confidence, right of privacy or right under data protection legislation;</p></li>
                <li><p>Any contractual obligation owed to any person; or</p></li>
                <li><p>Any court order.</p></li>
              </ul>
              <p>You must not use our platform to link to any website or web page consisting of or containing material that would, were it posted on our platform, breach the provisions of these general terms and conditions.</p>
              <p>The review function on the platform may be used to facilitate buyer reviews on products. You shall not use the review function or any other form of communication to provide inaccurate, inauthentic or fake reviews.</p>
              <p>We may periodically review your content and we reserve the right to remove any content in our discretion for any reason whatsoever.</p>

            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default TermsConditions;
