import React from "react";
import "./seven.scss";
import Herobanner from "../aseert/photo/herobanner.png";
import Logo from "../aseert/photo/logo.svg";
import Logo1 from "../aseert/photo/logo1.png";
import Logo2 from "../aseert/photo/logo2.svg";
import Logo3 from "../aseert/photo/logo3.svg";
import Img from "../aseert/photo/img.png";
import Img1 from "../aseert/photo/img1.png";
import Img2 from "../aseert/photo/img2.png";
import Img3 from "../aseert/photo/img3.png";
import Img4 from "../aseert/photo/img4.png";
import Photo from "../aseert/photo/photo.png";
import Logo4 from "../aseert/photo/logo4.png";
import Logo5 from "../aseert/photo/logo5.svg";
import Logo6 from "../aseert/photo/logo6.svg";
import Logo7 from "../aseert/photo/logo7.svg";

export default function Seven() {
  return (
    <div>
         <div className="herobannerposition">
        <div>
          <img className="herobanner" src={Herobanner} alt="" />{" "}
        </div>
        <div className="herobannertext">
          <div className="herobannerflex">
            <div>
              <img className="logo" src={Logo} alt="" />
            </div>
            <div className="herobannerflex1">
              <p>Home</p>
              <div>
                <p>About Us</p>
              </div>
              <div>
                <p>Services</p>
              </div>
              <div>
                <p>career</p>
              </div>
              <div>
                <p>FAQ</p>
              </div>
            </div>
          </div>
          <div className="herobannercontainer">
            <div className="herobannerbox">
              <div className="herobannerbox1">
                <div>
                  <img src={Logo1} alt="" />
                </div>

                <div>
                  <h1 className="herobannerh1">FINANCE REDEFINED</h1>
                  <p className="herobannerh11">
                    Take the first step towards your secure financial future
                    now.
                  </p>
                  <p className="herobannerh111">
                    Do you also think it's time to invest in your financial
                    education and future? We're here to guide you on this
                    journey.
                  </p>
                  <p style={{ fontWeight: "700", color: "#ffffff" }}>
                    The Challenges of Finance:
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      lineHeight: "23px",
                    }}
                  >
                    In today's society, there is a significant gap in financial
                    education, both in schools and at home.<br></br> Financial
                    topics are often perceived as too complicated or
                    uninteresting. The result? A generation<br></br> facing the
                    challenges of an ever-changing financial system without the
                    appropriate tools to make<br></br> informed decisions.
                  </p>
                  <div>
                    <button className="herobannerbutton" type="button">
                      Arrange an initial consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
           <div className="secondback">
        <div className="secondcontainer">
          <div>
            <h1>DO YOU HAVE THESE CHALLENGES?</h1>
          </div>
          <div className="secondgrid">
            <div>
              <div className="imgflex">
                <div>
                  <img src={Logo2} alt="" />
                </div>
              </div>

              <div style={{ padding: "30px 0px 0px" }}>
                <p>
                  {" "}
                  <b>
                    Low interest rates & pension <br></br> gap
                  </b>{" "}
                </p>
                <p>
                  4% interest on your savings is <br></br> no longer enough to
                  maintain <br></br> your standard of living in <br></br>{" "}
                  retirement.
                </p>
              </div>
            </div>
            <div>
              <div className="imgflex">
                <div>
                  <img src={Logo2} alt="" />
                </div>
              </div>
              <div style={{ padding: "30px 0px 0px" }}>
                <p>
                  {" "}
                  <b> High tax burden & lack of support</b>
                </p>
                <p>
                  You struggle with high taxes and a lack of subsidies, which
                  means you have less money in your pocket at the end of the
                  day.
                </p>
              </div>
            </div>
            <div>
              <div className="imgflex">
                <div>
                  <img src={Logo3} alt="" />
                </div>
              </div>
              <div style={{ padding: "30px 0px 0px" }}>
                <p>
                  {" "}
                  <b>High rents & property pricesp</b>{" "}
                </p>
                <p>
                  You pay almost half of your income<br></br>
                  for housing,<br></br>
                  which leaves you with less money<br></br>
                  to live on <br></br>
                </p>
              </div>
            </div>
            <div>
              <div className="imgflex">
                <div>
                  <img src={Logo3} alt="" />
                </div>
              </div>
              <div style={{ padding: "30px 0px 0px" }}>
                <p>
                  {" "}
                  <b>
                    Unnecessary & incorrect financial<br></br> products
                  </b>{" "}
                </p>
                <p>
                  You spend too much money on<br></br> products that don't
                  contribute to your<br></br> personal goals. You lack trust{" "}
                  <br></br>because of a lack of transparency.
                </p>
              </div>
            </div>
          </div>
          <p className="p1"></p>
        </div>
      </div> 
       <div className="thirdback">
        <div className="thirdcontainer">
          <div>
            <h1>OUR HEART BEATS FOR YOUR SUCCESS </h1>
            <h2>SIMPLE. EFFICIENT. EFFECTIVE.</h2>
          </div>
          <div className="thirdbox">
            <div>
              <h1>8,580+ </h1>
              <p>
                Successfully <br></br> advising private <br></br> households and{" "}
                <br></br> companies
              </p>
            </div>
            <div>
              <h1>562 + </h1>
              <p>
                Accompanying real<br></br> estate purchases
              </p>
            </div>
            <div>
              <h1>102 + </h1>
              <p>
                million EUR invested<br></br> and managed by our<br></br>{" "}
                customers
              </p>
            </div>
            <div>
              <h1>13.5 +</h1>
              <p>
                Million EUR tax and<br></br>social security benefits <br></br>{" "}
                realized for our<br></br> customers.
              </p>
            </div>
          </div>
          <div>
            <p className="p11"></p>
          </div>
        </div>
      </div> 

       <div className="fourback">
        <div className="fourcontainer">
          <div>
            <h1 className="fourh1"> WHAT WE OFFER</h1>
            <p className="fourp">
              ALWAYS THE RIGHT SOLUTION, REGARDLESS OF THE MARKET SITUATION{" "}
            </p>
            <p className="fourp1">
              One thing you need to know: There is no "one way."
            </p>
            <p className="fourp2">
              Based on your goals and the solutions available on the market that
              seriously contribute to
            </p>
            <p className="fourp2">
              these goals, we have access to almost the entire financial market
              to design the best concept
            </p>
            <p className="fourp2">for you.</p>
          </div>
          <div className="fourbox">
            <div className="fourgrid">
              <div className="griditems">
                <div>
                  {" "}
                  <img className="img1" src={Img} alt="" />
                </div>
                <div className="text">
                  <div className="griditems1">
                    <p className="p1">PROPERTY</p>
                    <p className="fourP11">
                      Invest in your future with real estate as an investment.
                    </p>
                    <p className="fourp13">LEARN MORE -{">"}</p>
                  </div>
                </div>
              </div>
              <div className="griditems">
                <div>
                  {" "}
                  <img className="img1" src={Img1} alt="" />
                </div>
                <div className="text">
                  <div className="griditems1">
                    <p className="p1">INVESTMENT</p>
                    <p className="fourP11">
                      Take advantage of attractive return opportunities for your
                      wealth creation
                    </p>
                    <p className="fourp13">LEARN MORE -{">"}</p>
                  </div>
                </div>
              </div>
              <div className="griditems">
                <div>
                  {" "}
                  <img className="img1" src={Img2} alt="" />
                </div>
                <div className="text">
                  <div className="griditems1">
                    <p className="p1">FINANCING</p>
                    <p className="fourP11">
                      Make your dream of owning your own home come true
                    </p>
                    <p className="fourp13">LEARN MORE -{">"}</p>
                  </div>
                </div>
              </div>
              <div className="griditems">
                <div>
                  {" "}
                  <img className="img1" src={Img3} alt="" />
                </div>
                <div className="text">
                  <div className="griditems1">
                    <p className="p1">INSURANCE</p>
                    <p className="fourP11">
                      Be preventive and forward-looking for the future
                    </p>
                    <p className="fourp13">LEARN MORE -{">"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="herobannerbutton11" type="button">
              Arrange an initial consultation
            </button>
          </div>
          <div>
            <p className="p11"></p>
          </div>
        </div>
      </div>
      <div className="fourback1">
        <div className="fourcontainer1">
          <div>
            <h1 className="fourh1">EXPERIENCE FROM OVER</h1>
            <h1 className="fourh1">5,000 CONSULTATIONS IN THE LAST 5 YEARS</h1>
            <p className="fourp4">
              These companies trust our successful financial solutions and work
              with <br></br> us.
            </p>
            <div>
              <button className="herobannerbutton12" type="button">
                Arrange an initial consultation for corporate customer advice
              </button>
            </div>
            <h1 className="fourh22">
              These private households rely on our successful financial
              solutions and come closer to their personal goals and wishes day
              by day
            </h1>
          </div>
        </div>
      </div> 
        <div className="fiveback">
        <div className="fivecontainer">
          <div className="whitebox">
            <div>
              <img src={Img4} alt="" />
            </div>
          </div>
          <div>
            <button className="herobannerbutton13" type="">
              More customer testimonials and experiences
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="p111"></p>
       </div> 
       <div className="sixback">
        <div className="sixcontainer">
          <div>
            <h1>
              THE PATH TO FINANCIAL SECURITY
            </h1>
            <p className="sixcontainerp ">
              It's not only important to start early, but also to choose the
              right strategy from the start. A structured plan based on your
              individual goals and needs can mean the difference between
              financial worries in old age or an earlier and more prosperous
              retirement.
            </p>
          </div> 
          <div className="sixgrid">
            <div className="sixbox">
              <h1>clarification of your current situation</h1>
              <p>
                First, we'll inform you about the current economic and market
                situation. You'll receive all the important information you need
                to make the most of the opportunities and possibilities
                available to you.
              </p>
            </div>
            <div className="sixbox1">
              <h1>Defining your financial goals</h1>
              <p>
                Based on your goals and desires, we'll work with you to set the
                necessary course for your future. All the things that are
                important to you and the goals you want to achieve will form the
                basis for your course.
              </p>
            </div>
            <div className="sixbox2">
              <h1>your comprehensive current analysis</h1>
              <p>
                Before we give you advice, we need to understand where you
                stand. So, together we'll create an overview of your current
                financial situation. In the process, we'll eliminate unnecessary
                positions that have been preventing you from investing your
                money effectively.
              </p>
            </div>
            <div className="sixbox3">
              <h1>Your personal strategy</h1>
              <p>
                Every person is unique. Your financial plan should reflect this.
                We create a plan based on your goals, risk tolerance, and needs.
                After analyzing your personal strategy, we can draw on almost
                all of the proven financial institutions on the German market
                and select the most important ones to help you achieve your
                goals faster.
              </p>
            </div>
            <div className="sixbox2">
              <h1>The beginning of a journey to your goals</h1>
              <p>
                With a transparent basis for decision-making, nothing stands in
                the way of practical implementation to achieve your financial
                goals, and your journey can begin. The flexibility of our
                concepts allows us to adapt the strategy to every life event
                without deviating from the course.
              </p>
            </div>
            <div className="sixbox4">
              <h1>Partnership and our service promise</h1>
              <p>
                The financial world is dynamic. Therefore, it's important to
                regularly review your strategy and adjust it as needed. Through
                our proactive support, we're on hand to ensure your plan is
                always up-to-date. This way, you don't have to worry about it,
                as we take care of the implementation for you.
              </p>
            </div>
          </div>
        </div>
      </div> 
        <div className="sevenback">
        <div className="sevencontainer">
          <div>
            <h1 className="p1">HOW DOES WORK WITH US WORK?</h1>
          </div>
          <div className="sevenconatiner1">
            <div className="sevengrid">
              <div className="sevenbox">
                <h1 className="h11">01</h1>
                <p>Book an appointment</p>
                <span>
                  An expert from our team will work with you to analyze where
                  you currently stand and determine whether and how we can help
                  you further.
                </span>
              </div>
              <div className="sevenbox">
                <h1 className="h11">02</h1>
                <p>Strategy discussion</p>
                <span>
                  It's important for us to understand what you want to achieve
                  and what your goals are so we can define them concretely. At
                  the same time, we determine which building blocks will take
                  you to your goals in the shortest possible way.
                </span>
              </div>
              <div className="sevenbox">
                <h1 className="h11">03</h1>
                <p>Your concept</p>
                <span>
                  Your concept: You'll receive a customized concept based on
                  your clearly defined goals, and you can begin immediately. As
                  your partner, we'll accompany and support you, especially
                  during implementation.
                </span>
              </div>
            </div>
            <div className="sevenbuttonflex">
              <button className="sevenbutton" type="button">
                Arrange an initial consultation
              </button>
            </div>
          </div>
        </div>
     </div>
         <div className="eightgrid">
          <div className="img-position">
            <div>
              {" "}
              <img src={Photo} alt="" />{" "}
            </div>
            <div className="img-postion1">
              <h1>
                FOR YOUR <br></br>
                FINANCIAL<br></br>
                FUTURE
              </h1>
              <h2>Remzi, Grunder</h2>
            </div>
          </div>
          <div className="img-position">
            <div className="eightbox">
              <div className="eightflex">
                <div>
                  <h1>
                    24|seven <br></br> Finance <br></br> Redefined
                  </h1>
                </div>
                <div>
                  <img src={Logo4} alt="" />
                </div>
              </div>
              <p className="font2">
                "Over 30 years of expertise in the financial market."
              </p>
              <p className="font1">
                When it comes to finance, football, or politics, we have 80
                million experts in Germany. There are countless different
                opinions, conveyed despite a lack of knowledge. It doesn't
                matter where you get the information from: from the internet or
                from your own environment (family, friends, acquaintances, and
                colleagues). At the end of the day, you make wrong decisions
                based on wrong information. That's why we've made it our mission
                to present insurance and finance as simply and transparently as
                possible, to give people like you a sound basis for making
                decisions.
              </p>
              <p className="font1">
                "Transparent and honest advice through correctly applied
                knowledge"
              </p>
              <p className="font1">
                People who place their trust in us find the exchange between
                equals easy and productive after our consultation. They
                immediately notice that finance is fun and never about selling
                products. Even if this is always accused of commission-based
                advice. We don't sell anything. With us, you buy. Your goals and
                you are our focus. We make no exceptions when it comes to the
                quality of our advice. This means we can 100% guarantee that the
                advice experience will always be excellent and that the highest
                quality standards will be maintained, no matter which advisor
                you choose! You can see why people trust us here: Link
                Provenexpert
              </p>
              <p className="font1">"Our Mission"</p>
              <p className="font1">
                As a center of experts, we have one expert each for the
                following professions: industrial sales, retail sales, office
                communications, engineers, IT specialists, nursing
                professionals, as well as students and trainees. We also have an
                expert for the special target group of women who place great
                value on financial independence and want to secure themselves
                independently of their partners or for parental leave. This is
                the only way we can underpin our expert status. Our goal: by
                2030, we will successfully advise and support an additional
                10,000 households.
              </p>
            </div>
          </div>
        </div>  
         <div className="nineback">
          <div className="ninecontainer">
            <p className="bordertop"> </p>
            <div>
              <h1>FREQUENTLY ASKED QUESTIONS </h1>
            </div>
            <div className="ninegrid">
              <div className="ninebox">
                <p className="ninep">
                  What can I expect in the initial consultation?
                </p>
                <p className="ninep1">
                  Since every prospective client has different ideas, each
                  consultation is tailored to their individual needs. For this
                  reason, we focus exclusively on the topics that are relevant
                  to you. Our advice primarily focuses on insurance,
                  investments,real estate, and financing.
                </p>
              </div>
              <div className="ninebox">
                <p className="ninep">Why is the initial consultation free? </p>
                <p className="ninep2">
                  To give you a more comprehensive understanding of our
                  consulting strategy and a glimpse into what a long-term
                  partnership with us could look like, it's crucial that you
                  experience our working methods firsthand. Naturally, we hope
                  this will encourage you to become our client—of course, only
                  if you enjoyed the consultation and see the concrete financial
                  benefits for yourself.
                </p>
              </div>
              <div className="ninebox">
                <p className="ninep">
                  How do I secure the initial consultation?
                </p>
                <p className="ninep2">
                  1. By clicking on the button “Arrange initial consultation”
                  you will be redirected to our questions.<br></br>
                  3. An expert from our team will then contact you to schedule
                  an appointment.
                </p>
              </div>
              <div className="ninebox">
                <p className="ninep">I'm not sure if you can help me?</p>
                <p className="ninep3">
                  Are you employed, self-employed, or a business owner? We can
                  help you. You can be sure of this during your free initial
                  consultation, where we'll determine whether and how we can
                  help you.
                </p>
              </div>
              <div className="ninebox">
                <p className="ninep">Who exactly can you help?</p>
                <p className="ninep3">
                  If you want to save up to 30% on your current insurance, are
                  considering an early retirement plan, are looking for a home
                  or need financing for it, want to set up an investment savings
                  plan and are looking for professional support, or have the
                  desire to build a real estate portfolio – then we are the
                  right people for you.
                </p>
              </div>
              <div className="ninebox">
                <p className="ninep">What references do you have?</p>
                <p className="ninep3">
                  In addition to the companies we advise on financial matters,
                  we have customer interviews on our services page. You can also
                  read reviews on Provenexpert.
                </p>
              </div>
            </div>
            <p className="bordertop1"></p>
          </div>
        </div>   
         <div className="tenback">
          <div className="tencontainer">

            <div className="tenbox">
              <div className="tengrid">
                <div>
                  <h1>CONTACT</h1>
                  <p>+49 2902 9790964</p>
                  <p>info@24-sieben.com</p>
                  <p>Wilkeplatz 9</p>
                  <p>59581 Warstein</p>
                  <p style={{paddingBottom:"40px"}}>Germany</p>
                </div>
                <div>
                  <label for="name">NAME </label>
                  <input type="name" name="name" value="" />
                  <label for="name">E-MAIL*</label>
                  <input type="EMAIL" name="EMAIL" value="" />
                  <label for="name">PHONE NUMBER*</label>
                  <input
                    type="name"
                    name="PHONE NUMBER*
"
                    value=""
                  />
                  <label for="name">YOUR MESSAGE</label>
                  <textarea></textarea>
                  <div>
                    <span>
                      I hereby agree to the privacy policy and terms and
                      conditions:
                    </span>
                  </div>
                  <div>
                    <button type="button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
         <div className="elevenback">
          <div className="elevencontainer">
            <div className="elevenflex">
              <div>
                <h1>SOCIAL LINKS</h1>
                <div className="elevenflex1">
                  <img src={Logo5} alt="" />
                  <img src={Logo6} alt="" />
                  <img src={Logo7} alt="" />
                </div>
              </div>
              <div>
                <h1>LEGAL</h1>
                <p>General Terms and Conditions</p>
                <p>IMPRINT</p>
                <p>DATA PROTECTION</p>
              </div>
            </div>
          </div>
        </div>    
     </div>
  );
}
